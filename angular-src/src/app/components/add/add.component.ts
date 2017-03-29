import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  name: String;
  owner: String;
  owner_pretty: String;
  github_filelink: String;
  ftp_server: String;
  ftp_port: String;
  ftp_username: String;
  ftp_password: String;

  constructor(
    private authService: AuthService,
    private projectService: ProjectService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {

    this.authService.getAuthenticatedUser().subscribe(data => {
      this.owner = data.user.username;
    })
  }

  onAddSubmit() {
    let project = {
      name: this.name,
      iteration: "0",
      deployment_date: "" + new Date() + "",
      owner: this.owner,
      owner_pretty: this.owner_pretty,
      github_file: this.github_filelink,
      ftp_server: this.ftp_server,
      ftp_port: this.ftp_port,
      ftp_username: this.ftp_username,
      ftp_password: this.ftp_password
    }

    this.projectService.postProject(project).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/dashboard']);
      } else {
        this.flashMessagesService.show('Unable to post new project. Please try again later', {cssClass: 'alert-danger no-margin-text', timeout: 3000});
      }
    })
  }

}
