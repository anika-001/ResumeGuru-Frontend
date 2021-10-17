import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevpdfComponent } from './prevpdf.component';

describe('PrevpdfComponent', () => {
  let component: PrevpdfComponent;
  let fixture: ComponentFixture<PrevpdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevpdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
