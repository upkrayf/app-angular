import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = '/assets/mock-data/products.json';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }
  
}
