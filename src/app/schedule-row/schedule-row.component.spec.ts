import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRowComponent } from './schedule-row.component';

describe('ScheduleRowComponent', () => {
  let component: ScheduleRowComponent;
  let fixture: ComponentFixture<ScheduleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
