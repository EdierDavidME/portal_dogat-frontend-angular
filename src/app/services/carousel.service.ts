import { Injectable, EventEmitter } from '@angular/core';
import { Carousel } from '../models/carousel.model';

@Injectable()
export class CarouselService {
  images: Carousel[] = [
    new Carousel(
      'assets/img/carousel/c1.jpg',
      'img 1',
      'copyright 1',
      'active'
    ),
    new Carousel('assets/img/carousel/c2.jpg', 'img 2', 'copyright 2', ''),
    new Carousel('assets/img/carousel/c3.jpg', 'img 3', 'copyright 3', ''),
  ];

  addImg(image: Carousel): void {
    this.images.push(image);
  }
}
