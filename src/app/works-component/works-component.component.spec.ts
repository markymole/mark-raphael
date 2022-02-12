import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksComponentComponent } from './works-component.component';

describe('WorksComponentComponent', () => {
  let component: WorksComponentComponent;
  let fixture: ComponentFixture<WorksComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
