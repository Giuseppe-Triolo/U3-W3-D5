import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  onSubmit(_t6: NgForm) {
    throw new Error('Method not implemented.');
  }
  email = '';
  password = '';

  constructor(
    private auth: AuthService,

    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.auth.signIn(this.email, this.password).subscribe({
      next: (data) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userid', `${data.user.id}`);
        this.router.navigate(['/']);
      },

      error: (e) => {
        sessionStorage.setItem('isLoggedIn', 'false');
        sessionStorage.setItem('userid', '0');
        return false;
      },

      complete: () => {
        console.log('123123123');
      },
    });
  }
}
