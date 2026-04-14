import { Injectable } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = '/assets/mock-data/products.json';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }
  
}
