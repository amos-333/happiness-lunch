import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-result-group',
  templateUrl: './result-group.component.html',
  styleUrls: ['./result-group.component.css'],
})
export class ResultGroupComponent implements OnInit {
[x: string]: any;
  constructor(private api: ApiService) {
    this.getData();
  }

  ngOnInit(): void {}

  jsonData: any = [];
  filterData: any = [];
  classCount: any = {};

  isActive: String = 'silver';
  silverClub: any = [];
  goldClub: any = [];
  platinumClub: any = [];
  diamondClub: any = [];

  getData() {
    this.api.getData().subscribe((res) => {
      // console.log(res.values);
      // res.values.forEach((element: any) => {
      //   if (element[3] === 'MCOM' && element[4] === 'FIRST') {
      //     this.mcomFirst.push(element);
      //   } else if (element[3] === 'MCOM' && element[4] === 'SECOND') {
      //     this.mcomSecond.push(element);
      //   } else if (element[3] === 'BBA IB' && element[4] === 'FIRST') {
      //     this.bbaIbFirst.push(element);
      //   } else if (element[3] === 'BBA IB' && element[4] === 'SECOND') {
      //     this.bbaIbSecond.push(element);
      //   } else if (element[3] === 'BBA IB' && element[4] === 'THIRD') {
      //     this.bbaIbThird.push(element);
      //   }
      // });
      // console.log(this.mcomFirst);
      // console.log(this.mcomSecond);
      // const groupedData:any = {};
      // for (let i = 1; i < res.values.length; i++) {
      //   const dept = res.values[i][3];
      //   if (!groupedData[dept]) {
      //     groupedData[dept] = [];
      //   }
      //   groupedData[dept].push(res.values[i]);
      // }

      // console.log(groupedData);

      //toJson
      this.jsonData = res.values.slice(1).map((row: any) => {
        return {
          'S.No': row[0],
          'REG.No': row[1],
          'NAME OF THE STUDENT': row[2],
          DEPT: row[3],
          YEAR: row[4],
          DEPT_YEAR: `${row[3]} ${row[4]}`,
          'BOOK NO': row[5],
          'LUNCH COUNT': row[6],
          'AMOUNT COLLECTED': row[7],
        };
      });
      console.log(this.jsonData);
      //filteringTheArray
      this.filterData = this.jsonData.map((row: any) => {
        return {
          DEPT: row.DEPT,
          'LUNCH COUNT': row['LUNCH COUNT'],
        };
      });
      // console.log(this.filterData.slice(0, this.filterData.length - 1));
      //findingTheCount
      this.filterData
        .slice(0, this.filterData.length - 1)
        .forEach((row: any) => {
          if (!this.classCount[row.DEPT]) {
            this.classCount[row.DEPT] = Math.round(row['LUNCH COUNT']);
            return;
          }
          this.classCount[row.DEPT] =
            Math.round(this.classCount[row.DEPT]) +
            (row['LUNCH COUNT'] === undefined? 0 : Math.round(row['LUNCH COUNT']))
// console.log(row['LUNCH COUNT'] === undefined? 0 : Math.round(row['LUNCH COUNT']))
        });
      // console.log(this.classCount);
      const keys: any = Object.keys(this.classCount);
      keys.forEach((row: any) => {
        // console.log(this.classCount[row]);
        if (this.classCount[row] >= 300 && this.classCount[row] < 600) {
          this.silverClub.push([row, this.classCount[row]]);
        } else if (this.classCount[row] >= 600 && this.classCount[row] < 750) {
          this.goldClub.push( [row, this.classCount[row]] );
        } else if (this.classCount[row] >= 750 && this.classCount[row] < 1000) {
          this.diamondClub.push([row, this.classCount[row]]);
        } else if (this.classCount[row] >= 1000) {
          this.platinumClub.push([row, this.classCount[row]]);
        }
      });
//       console.log(this.silverClub);
//       console.log(this.goldClub);
//       console.log(this.diamondClub);
//       console.log(this.platinumClub);
// this.keys(this.goldClub)
    });
  }

public keys(obj:any):any{
// console.log(Object.keys(obj))
return       Object.keys(obj)
}



}
