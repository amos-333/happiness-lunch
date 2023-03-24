import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-result-group',
  templateUrl: './result-group.component.html',
  styleUrls: ['./result-group.component.css'],
})
export class ResultGroupComponent implements OnInit {
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
        if (element[6] >= 300 && element[6] < 600) {
          this.sliverMem.push(element);
        } else if (element[6] >= 600 && element[6] < 750) {
          this.goldMem.push(element);
        } else if (element[6] >= 750 && element[6] < 1000) {
          this.platinumMem.push(element);
        } else if (element[6] >= 1000) {
          this.diamondMem.push(element);
        }
      });
      console.log(this.sliverMem);
      console.log(this.goldMem);
      console.log(this.diamondMem);
      console.log(this.platinumMem);
    });
  }
}
