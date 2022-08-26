import { Component } from '@angular/core';
import { LoadImagesService } from 'src/app/services/load-images.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.less'],
})
export class HomeScreenComponent {
  constructor(private loadImagesService: LoadImagesService) {}
  onImageLoad() {
    console.log('load home images');
    this.loadImagesService.setLoadedImages(true);
  }
}
