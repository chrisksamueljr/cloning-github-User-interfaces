import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecievedEventsComponent } from './user-recieved-events.component';

describe('UserRecievedEventsComponent', () => {
  let component: UserRecievedEventsComponent;
  let fixture: ComponentFixture<UserRecievedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRecievedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecievedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
