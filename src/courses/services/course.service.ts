import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable()
export class CourseService {

  private routeStorage: Course;

  // @todo - add caching support via HttpClientCache

  constructor(
      private http: HttpClient
  ) { }

  public getCourseList(): Observable<any> {
    return this.http.get('//localhost:12000/courses');
  }

  public getCourse(id: number): Observable<any> {
    return this.http.get('//localhost:12000/courses/' + id);
  }

  public getRouteStorage(): Course {
    return this.routeStorage;
  }

  public setRouteStorage(course: Course): void {
    this.routeStorage = course;
  }
}
