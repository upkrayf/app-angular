import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../services/product';
import { Product as ProductInterface } from '../models/product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit {
  products: ProductInterface[] = [];

  constructor(
    private productService: Product,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  goToProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}

