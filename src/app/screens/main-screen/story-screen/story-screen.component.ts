import { Component } from '@angular/core';
import { LoadImagesService } from 'src/app/services/load-images.service';

@Component({
  selector: 'app-story-screen',
  templateUrl: './story-screen.component.html',
  styleUrls: ['./story-screen.component.less'],
})
export class StoryScreenComponent {
  constructor(private loadImagesService: LoadImagesService) {}
  isLoadedImage$ = this.loadImagesService.getLoadedImages();
  storyImages = [
    {
      src: 'assets/images/story_imgs/1.jpg',
    },
    {
      src: 'assets/images/story_imgs/2.jpg',
    },
    {
      src: 'assets/images/story_imgs/3.jpg',
    },
    {
      src: 'assets/images/story_imgs/4.jpg',
    },
  ];
}
