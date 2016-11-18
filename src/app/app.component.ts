import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works!';

  click() {
    console.log('click');
  }

  links: any[] = [
      { href: '/my-icon', label: 'My Icon' },
  ];
}
