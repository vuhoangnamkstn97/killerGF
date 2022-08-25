import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-artist-item',
  templateUrl: './feature-artist-item.component.html',
  styleUrls: ['./feature-artist-item.component.less'],
})
export class FeatureArtistItemComponent implements OnInit {
  @Input()
  avatar: string = '';
  @Input()
  name: string = '';
  @Input()
  description: string = '';
  constructor() {}

  ngOnInit(): void {}
}
