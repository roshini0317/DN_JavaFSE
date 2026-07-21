import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  providers: [
    NotificationService
  ],
  template: `
    <p>
      {{ notification.message }}
    </p>
  `
})
export class NotificationComponent {

  constructor(
    public notification: NotificationService
  ) {}

}

/*
 Component-level providers create
 a new NotificationService instance
 scoped only to this component and
 its children. Other components get
 different instances.
*/