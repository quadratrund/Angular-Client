import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LessonService } from './lesson.service';

describe('LessonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ LessonService ],
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: LessonService = TestBed.get(LessonService);
    expect(service).toBeTruthy();
  });
});
