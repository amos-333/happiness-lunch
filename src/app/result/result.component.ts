import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private api: ApiService) {
    this.getData();
  }

  ngOnInit(): void {}

  isActive: String = 'silver';
  sliverMem: any = [];
  goldMem: any = [];
  diamondMem: any = [];
  platinumMem: any = [];

  getData() {
    this.api.getData().subscribe((res) => {
      console.log(res.values);
      res.values.forEach((element: any) => {
        if (element[6] >= 100 && element[6] < 200) {
          this.sliverMem.push(element);
        } else if (element[6] >= 200 && element[6] < 300) {
          this.goldMem.push(element);
        } else if (element[6] >= 300 && element[6] < 500) {
          this.diamondMem.push(element);
        } else if (element[6] >= 500) {
          this.platinumMem.push(element);
        }
      });
      console.log(this.sliverMem);
      console.log(this.goldMem);
      console.log(this.diamondMem);
      console.log(this.platinumMem);
    });
  }
}
