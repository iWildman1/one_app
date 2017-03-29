import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  projectData: Object;

  name: String;
  owner: String;
  owner_pretty: String;
  iteration: String;
  github_file: String;
  deployment_date: String;
  ftp_server: String;
  ftp_port: String;
  ftp_username: String;
  ftp_password: String;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.projectService.getSingleProject(this.id).subscribe(data => {
        if (data.success) {
          this.projectData = data.project;

          this.name = data.project.name,
          this.owner = data.project.owner,
          this.iteration = data.project.iteration;
          this.owner_pretty = data.project.owner_pretty,
          this.github_file = data.project.github_file,
          this.deployment_date = data.project.deployment_date,
          this.ftp_server = data.project.ftp_server,
          this.ftp_port = data.project.ftp_port,
          this.ftp_username = data.project.ftp_username,
          this.ftp_password = data.project.ftp_password

        } else {
          console.log("Couldn't find project")
        }
      })
    })
  }

  onUpdateSubmit() {
    let newProjectData = {
      name: this.name,
      iteration: this.iteration,
      deployment_date: this.deployment_date,
      owner: this.owner,
      owner_pretty: this.owner_pretty,
      github_file: this.github_file,
      ftp_server: this.ftp_server,
      ftp_port: this.ftp_port,
      ftp_username: this.ftp_username,
      ftp_password: this.ftp_password
    }

    this.projectService.updateProject(this.id, newProjectData).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessages.show('The project failed to update. Please try again later', {cssClass: 'alert-danger no-margin-text', timeout: 3000})
      }
    })
  }

}
