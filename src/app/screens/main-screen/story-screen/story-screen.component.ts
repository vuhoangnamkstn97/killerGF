import { Component } from '@angular/core';

@Component({
  selector: 'app-story-screen',
  templateUrl: './story-screen.component.html',
  styleUrls: ['./story-screen.component.less'],
})
export class StoryScreenComponent {
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
  constructor() {}
}
