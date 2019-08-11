import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LessonService {

  private routeStorage: any;

  constructor(
    private http: HttpClient
  ) { }

  public getRouteStorage(): any {
    return this.routeStorage;
  }

  public setRouteStorage(lesson: any): void {
    this.routeStorage = lesson;
  }
}
