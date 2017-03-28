import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  passwordconfirmation: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      passwordconfirmation: this.passwordconfirmation,
    }

    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show('Please fill out all fields', {cssClass: 'alert-danger no-margin-text', timeout: 3000});
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show('Please enter a valid email address', {cssClass: 'alert-danger no-margin-text', timeout: 3000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('Successfully registered. Redirecting...', {cssClass: 'alert-success no-margin-text', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessagesService.show('There was an error whilst signing you up. Please try again.', {cssClass: 'alert-danger no-margin-text', timeout: 3000});
      }
    })

  }

}
