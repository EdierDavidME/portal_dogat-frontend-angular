import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../models/carousel.model';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
  providers: [CarouselService],
})
export class HomeCarouselComponent implements OnInit {
  images: Carousel[] = [];
  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.images = this.carouselService.images;
  }
}
