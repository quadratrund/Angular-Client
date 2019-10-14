import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CoursesModule } from '../../../courses/courses.module';
import { NotebookService } from '../../services/notebook.service';
import { NotebookFormComponent } from './notebook-form.component';

describe('NotebookFormComponent', () => {
  let component: NotebookFormComponent;
  let fixture: ComponentFixture<NotebookFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookFormComponent ],
      imports: [ FormsModule, HttpClientModule, CoursesModule ],
      providers: [ NotebookService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
