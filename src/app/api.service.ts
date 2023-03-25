import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(
      'https://sheets.googleapis.com/v4/spreadsheets/1NLgawA2IAuX1DyT1YH1rt7mp4refIKKfq5toR8zDjhs/values/ALLINONE?key=AIzaSyAVBZVKt7OxclSr1cf4YZq02-cosBozUCY'
    );
  }
}
