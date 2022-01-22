import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Postman', url: '/postman', icon: 'mail' },
    { title: 'QR', url: '/qr', icon: 'qr-code' },
    { title: 'Editor', url: '/peditor', icon: 'accessibility' },
  ];
  constructor() {}
}
