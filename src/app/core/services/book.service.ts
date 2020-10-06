import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class bookService {

  constructor(
    private http: HttpClient,

  ) { }
  get(page): Observable<any> {
    return this.http.get(environment.api_url + `/books?page=${page}`);
  }

  getById(id): Observable<any> {
    return this.http.get(environment.api_url + `/books/${id}`);
  }

}
