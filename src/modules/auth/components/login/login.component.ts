import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
        data => {
          this.authService.setCookie('es_cli_jwt', data.token);
          this.authService.setCookie('es_cli_ref', data.refresh_token);
        },
        err => console.error(err),
        () => console.log('done')
    );
  }

}
