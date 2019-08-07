import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { pluck } from 'rxjs/operators';

@Injectable()
export class CourseService {

  private routeStorage: Course;

  // @todo - add caching support via HttpClientCache

  constructor(
      private http: HttpClient
  ) { }

  public getCourseList(): Observable<any> {
    return this.http.get('//localhost:5000/api/courses').pipe(
      pluck('data')
    );
  }

  public getCourse(id: number): Observable<any> {
    return this.http.get('//localhost:5000/api/courses/' + id).pipe(
      pluck('data')
    );
  }

  public getRouteStorage(): Course {
    return this.routeStorage;
  }

  public setRouteStorage(course: Course): void {
    this.routeStorage = course;
  }
}
