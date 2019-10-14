import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthModule } from '../../../auth/auth.module';
import { SharedModule } from '../../../shared/shared.module';
import { NotebooksRoutingModule } from '../../notebooks-routing.module';
import { NotebookService } from '../../services/notebook.service';
import { NotebookDetailComponent } from '../notebook-detail/notebook-detail.component';
import { NotebookFormComponent } from '../notebook-form/notebook-form.component';
import { NotebookNoteFormComponent } from '../notebook-note-form/notebook-note-form.component';
import { NotebookListComponent } from './notebook-list.component';

describe('NotebookListComponent', () => {
  let component: NotebookListComponent;
  let fixture: ComponentFixture<NotebookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotebookListComponent,
        NotebookFormComponent,
        NotebookDetailComponent,
        NotebookNoteFormComponent
      ],
      imports: [
        SharedModule,
        AuthModule,
        NotebooksRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([])
      ],
      providers: [ NotebookService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
