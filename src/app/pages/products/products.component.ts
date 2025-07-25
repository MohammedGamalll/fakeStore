import { IProduct } from './../../core/interfaces/IProduct';
import { Component, inject, NgModule, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { get } from 'http';
import { IProducts } from '../../core/interfaces/IProducts';
import { Router } from 'express';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgClass } from '@angular/common';
import { SearchProductPipe } from '../../shared/pipes/search-product.pipe';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ProductSortPipe } from '../../shared/pipes/product-sort.pipe';

@Component({
  selector: 'app-products',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    SearchProductPipe,
    ProductSortPipe,
    CurrencyPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  Products: IProducts = [];
  searchValue: string = '';
  sortType: string = 'name-asc'; // default sort order
  ngOnInit(): void {
    this.getProducts();
  }
  _ProductsService = inject(ProductsService);
  getProducts() {
    this._ProductsService.getProducts().subscribe({
      next: (products) => {
        console.log(products);
        this.Products = products;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
        alert(
          'An error occurred while fetching products. Please try again later.'
        );
      },
      complete: () => {
        console.log('Product fetching completed');
      },
    });
  }
}
