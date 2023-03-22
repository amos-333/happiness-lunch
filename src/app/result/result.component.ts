import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mySwiper = new Swiper('.mySwiper', {
      effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
          },
          rewind:true,
          autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          },

    });
  }

}
