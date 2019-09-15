import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../modules/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  getStarted(): void {
    if (!this.authService.getAccessToken()) {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/courses']);
    }

    console.log('clicked get started button');
  }
}
