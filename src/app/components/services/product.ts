import { Injectable } from '@angular/core';
import { Product as ProductInterface } from '../models/product';
import { MOCK_PRODUCTS } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private products: ProductInterface[] = MOCK_PRODUCTS;
  constructor() {}
  getProducts(): ProductInterface[] {
    return this.products;
  }

  getProductById(id: number): ProductInterface | undefined {
    return this.products.find(product => product.id === id);
  }
  
  
}
