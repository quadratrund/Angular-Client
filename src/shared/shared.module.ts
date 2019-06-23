import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
      LoadingIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      LoadingIndicatorComponent
  ],
  providers: [
      AuthService
  ]
})
export class SharedModule { }
