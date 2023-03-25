import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService) {
    
      this.getData();

  }

  ngOnInit() {
    const mySwiper = new Swiper('.mySwiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows: true,
      },
      rewind: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  total: any = 0;
  totalArray: any = [];

  getData() {
    this.api.getData().subscribe((res) => {
      console.log(res.values);
      this.total = res.values[res.values.length - 1];
      console.log(this.total);
      this.splitTotal();
    });
  }

  splitTotal() {
    this.totalArray = Array.from(
      String(this.total[this.total.length - 1]),
      Number
    );
    console.log(this.totalArray);
  }
}
