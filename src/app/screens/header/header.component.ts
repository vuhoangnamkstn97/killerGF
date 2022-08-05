import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  activeItemIndex = 0;
  readonly tabs = [
    {
      tabName: 'Home',
      link: '/first-component',
    },
    {
      tabName: 'Detail',
      link: '/second-component',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log('init header');
  }
}
