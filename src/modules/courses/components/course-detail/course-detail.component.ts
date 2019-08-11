import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  public activeTab: string = 'description';

  @Input() course: Course;

  constructor(
      private courseService: CourseService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const course: Course = this.courseService.getRouteStorage();

    if (!course) {
      const id = String(this.route.snapshot.paramMap.get('id'));
      this.courseService.getCourse(id).subscribe(
        data => this.course = data,
          err => console.error(err)
      );
    } else {
      this.course = course;
    }
  }

  changeTab(tabName: string) {
    console.log('changeTab called');
    this.activeTab = tabName;
  }

}
