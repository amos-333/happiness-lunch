import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService) {
    this.getData();
  }

  total: any = 0;

  getData() {
    this.api.getData().subscribe((res) => {
      console.log(res.values);
      res.values.forEach((element: any) => {
        // console.log
        //         Number.isInteger()
        !isNaN(element[6])
          ? (this.total = this.total + parseInt(element[6]))
          : (this.total = this.total + 0);
      });
      console.log(this.total);
    });
  }

  ngOnInit(): void {}
}
