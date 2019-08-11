import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses: Course[];
  public loading: boolean;

  constructor(
      private courseService: CourseService,
      private router: Router
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.courseService.getCourseList().subscribe(
        data => this.courses = data,
        err => console.error(err),
        () => this.loading = false
    );
  }

  public openCourse(course: any) {
    console.log(course);
    this.courseService.setRouteStorage(course);
    this.router.navigate(['courses', course.id]);
  }
}
