import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(
      'https://sheets.googleapis.com/v4/spreadsheets/1Acfn6Jl-26V4IhxPTUCrq9yJs3889kNI_8tDUDmYzS0/values/sheet1?key=AIzaSyAVBZVKt7OxclSr1cf4YZq02-cosBozUCY'
    );
  }
}
