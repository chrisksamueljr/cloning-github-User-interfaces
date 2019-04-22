import { Component, Input } from '@angular/core';
import { User } from '../../user.types';

@Component({
  selector: 'user-card-view',
  templateUrl: './user-card-view.component.html',
  styleUrls: ['./user-card-view.component.css']
})
export class UserCardViewComponent  {

  constructor() { }

  @Input()
  user: User;
}