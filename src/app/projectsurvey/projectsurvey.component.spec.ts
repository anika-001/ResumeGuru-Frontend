import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsurveyComponent } from './projectsurvey.component';

describe('ProjectsurveyComponent', () => {
  let component: ProjectsurveyComponent;
  let fixture: ComponentFixture<ProjectsurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
