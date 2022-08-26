import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-artist-item',
  templateUrl: './feature-artist-item.component.html',
  styleUrls: ['./feature-artist-item.component.less'],
})
export class FeatureArtistItemComponent {
  @Input()
  avatar = '';
  @Input()
  name = '';
  @Input()
  description = '';
}
