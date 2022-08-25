import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
export interface IOwlItem {
  id: string;
  avatar: string;
  name: string;
  description: string;
}
@Component({
  selector: 'app-feature-artists',
  templateUrl: './feature-artists.component.html',
  styleUrls: ['./feature-artists.component.less'],
})
export class FeatureArtistsComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 10000,
    margin: 20,
    rtl: false,
    dotsEach: 1,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
  slidesStore: IOwlItem[] = [
    {
      id: '1',
      name: 'cirilla',
      avatar: 'assets/images/feature_artist_imgs/cirilla.jpg',
      description:
        'Cirilla Lin is a Freelance illustrator from Taiwan. They have been drawing for over 4 years and are known for drawing figures and scenery. They are prominent on Twitter amassing a following of over 200,000 fans.',
    },
    {
      id: '2',
      name: 'sashimi',
      avatar: 'assets/images/feature_artist_imgs/sashimi.jpg',
      description:
        'Sashimi is a Japanese Illustrator who is known for her cute and vibrant style, she is a community favorite among uwucrew, Anifam NFT, and other large anime art NFT communities!',
    },
    {
      id: '2',
      name: 'seekgoliath',
      avatar: 'assets/images/feature_artist_imgs/seekgoliath.jpg',
      description:
        'seekgoliath is an illustrator from Southeast Asia who entered NFTs in order to have more creative freedom as an artist. Their art regularly involves post-apocalyptic themes and we have featured them in our auctions as a reward for winning our first derivative art contest!',
    },
    {
      id: '3',
      name: 'yueko',
      avatar: 'assets/images/feature_artist_imgs/yueko.jpg',
      description:
        '0010 is an illustrator with a psychedelic and Anime influence trying to explore matters of the intangible. An NFT veteran since Curio Cards, 0010 has developed an iconic style that has reached the hands of many notable collectors.',
    },
  ];
  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }
}
