import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  projects: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private projectService: ProjectService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuthenticatedUser().subscribe(data => {
      this.user = data.user;

      this.projectService.getProjects(data.user.username).subscribe(projects => {
        this.projects = projects.projects;
      })
    });
  }

  onDeleteClick($event) {
    let deleteId = $event.toElement.id;

    this.projectService.deleteProject(deleteId).subscribe(data => {
      if (data.success) {
        this.flashMessages.show('Delete Successful. Please reload the page to see your changes', {cssClass: 'alert-success no-margin-text', timeout: 10000})
      } else {
        this.flashMessages.show('The project could not be deleted. Please try again later.', {cssClass: 'alert-danger no-margin-text', timeout: 3000});
      }
    })
  }

}
