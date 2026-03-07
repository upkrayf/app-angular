import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product as ProductService } from '../services/product';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, // URL'deki parametreyi okumak için
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // URL'den 'id' parametresini alıyoruz
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }
}