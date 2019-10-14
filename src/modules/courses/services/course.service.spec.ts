import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';

describe('CourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ CourseService ],
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: CourseService = TestBed.get(CourseService);
    expect(service).toBeTruthy();
  });
});
