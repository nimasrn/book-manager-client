import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,

  ) { }
  get(): Observable<any> {
    return this.http.get(environment.api_url + `/categories`);
  }

  create(data): Observable<any> {
    return this.http.post(environment.api_url + `/categories`, data);
  }

  getById(id): Observable<any> {
    return this.http.get(environment.api_url + `/books/${id}`);
  }

}
