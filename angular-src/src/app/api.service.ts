import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  adminUrl: string;
  constructor(public http: HttpClient) {

  this.adminUrl = 'http://localhost:3000';

  }

  getData() {
    return new Promise((res) => {
      this.http.get(this.adminUrl + '/notes').subscribe(data => {
        res(data);
      }, err => {
        console.error(err);
      });
    });
  }
}
