import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.less'],
})
export class FirstScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('init first screens');
  }
}
