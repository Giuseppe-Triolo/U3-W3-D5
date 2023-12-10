import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email = '';
  password = '';
  name = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signUp() {
    this.auth.signUp(this.email, this.password, this.name).subscribe({
      next: (data) => {
        this.router.navigate(['/']);
      },
      error: (e) => {},
    });
  }
}
