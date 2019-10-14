import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '../../../../app/app-routing.module';
import { LandingComponent } from '../../../../app/components/landing/landing.component';
import { NotebookService } from '../../services/notebook.service';
import { NotebookDetailComponent } from './notebook-detail.component';

describe('NotebookDetailComponent', () => {
  let component: NotebookDetailComponent;
  let fixture: ComponentFixture<NotebookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotebookDetailComponent, LandingComponent ],
      imports: [ AppRoutingModule, HttpClientModule ],
      providers: [ NotebookService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const notebookService: NotebookService = TestBed.get(NotebookService);
    notebookService.setRouteStorage({
      id: 42,
      name: 'Some Name',
      notes: [
        {
          title: 'Some Title',
          content: 'Some Content'
        }
      ]
    });
    fixture = TestBed.createComponent(NotebookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
