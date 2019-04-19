import { Component, Input } from '@angular/core';
import { Event } from 'src/root/user/user-events/user-events.types';
// import { UserCardViewComponent } from 'src/root/user/shared/user-card-view/user-card-view.component';

@Component({
  selector: 'event-card-view',
  templateUrl: './event-card-view.component.html',
  styleUrls: ['./event-card-view.component.css']
})
export class EventCardViewComponent {

  constructor() { }

  @Input()
  event: Event[]




}
