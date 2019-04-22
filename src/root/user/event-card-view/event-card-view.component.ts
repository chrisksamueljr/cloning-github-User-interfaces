import { Component, Input } from '@angular/core';
import { Event } from '../user-events/user-events.types';

@Component({
  selector: 'event-card-view',
  templateUrl: './event-card-view.component.html',
  styleUrls: ['./event-card-view.component.css']
})
export class EventCardViewComponent {

  constructor() { }

  @Input()
  event: Event;

}