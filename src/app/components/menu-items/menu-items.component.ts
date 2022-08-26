import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.less'],
})
export class MenuItemsComponent {
  menuItems = [
    {
      title: 'Home',
      link: '#home',
    },
    {
      title: 'The Story',
      link: '#story',
    },
    // {
    //   title: 'Galerry',
    //   link: '/galerry',
    // },
    {
      title: 'Roadmap',
      link: '#roadmap',
    },
    {
      title: 'Artist',
      link: '#feature_artist',
    },
    // {
    //   title: 'Team',
    //   link: '/team',
    // },
    // {
    //   title: 'License',
    //   link: '/license',
    // },
  ];
}
