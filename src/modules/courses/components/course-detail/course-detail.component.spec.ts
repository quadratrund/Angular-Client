import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { CoursesRoutingModule } from '../../courses-routing.module';
import { CourseService } from '../../services/course.service';
import { LessonService } from '../../services/lesson.service';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseDetailComponent } from './course-detail.component';

describe('CourseDetailComponent', () => {
  let component: CourseDetailComponent;
  let fixture: ComponentFixture<CourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetailComponent, CourseListComponent ],
      providers: [ CourseService, LessonService ],
      imports: [
        HttpClientModule,
        CoursesRoutingModule,
        SharedModule,
        RouterModule.forRoot([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
