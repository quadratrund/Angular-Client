import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CourseService } from './services/course.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [CourseListComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CoursesRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [
      CourseService,
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoursesModule { }
