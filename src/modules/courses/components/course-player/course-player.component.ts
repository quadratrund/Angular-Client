import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { LessonService } from '../../services/lesson.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-player',
  templateUrl: './course-player.component.html',
  styleUrls: ['./course-player.component.css']
})
export class CoursePlayerComponent implements OnInit {

  private course: Course;
  private lesson: any;

  constructor(
    private courseService: CourseService,
    private lessonService: LessonService
  ) { }

  ngOnInit() {
    this.course = this.courseService.getRouteStorage();
    this.lesson = this.lessonService.getRouteStorage();

    console.log(this.course, this.lesson);
  }

}
