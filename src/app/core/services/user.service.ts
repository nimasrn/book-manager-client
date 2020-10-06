import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  user = this.userData.asObservable();
  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  logout() {
    this.userData.next(null);
    localStorage.clear();
    this.router.navigate(['auth']);
  }
  register(data): Observable<any> {
    return this.http.post(environment.api_url + '/users/', data);
  }
  getUsers(): Observable<any> {
    return this.http.get(environment.api_url + `/users`);
  }
  getUserById(id): Observable<any> {
    return this.http.get(environment.api_url + '/users/' + id);
  }
  editUser(id, data): Observable<any> {
    return this.http.put(environment.api_url + '/users/' + id, data);
  }
  getProfiel(): Observable<any> {
    return this.http.get(environment.api_url + '/users/profile');
  }
  edittMe(data): Observable<any> {
    return this.http.put(environment.api_url + '/users/me', data);
  }

  async createUser(data) {
    return this.http.post(environment.api_url + `/users`, data).toPromise();
  }

  updateUserById(id, data) {
    return this.http.put(environment.api_url + `/users/${id}`, data);
  }
}
