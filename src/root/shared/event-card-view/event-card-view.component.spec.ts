import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardViewComponent } from './event-card-view.component';

describe('EventCardViewComponent', () => {
  let component: EventCardViewComponent;
  let fixture: ComponentFixture<EventCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
