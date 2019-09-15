import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
      private router: Router,
      private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
        data => {
          localStorage.setItem('es_cli_jwt', data.token);
          localStorage.setItem('es_cli_ref', data.refresh_token);

          this.router.navigate(['/courses']);
        },
        err => console.error(err),
        () => console.log('done')
    );
  }

}
