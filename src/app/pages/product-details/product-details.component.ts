import { Component, inject, OnInit } from '@angular/core';
import { ProductDetailsService } from '../../core/services/product-details/product-details.service';
import { IProduct } from '../../core/interfaces/IProduct';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CarouselModule, CurrencyPipe, NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  activatedRoute = inject(ActivatedRoute);
  _ProductDetailsService = inject(ProductDetailsService);
  productId: string = '';
  mainImage!: string;
  productDetails!: IProduct;
  imageCurosal: string[] = [
    this.mainImage,
    this.mainImage,
    this.mainImage,
    this.mainImage,
  ];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
    });
    this.getProductDetails();
  }
  getProductDetails() {
    this._ProductDetailsService.getProductDetails(this.productId).subscribe({
      next: (product) => {
        console.log(product);
        this.productDetails = product;
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
        alert(
          'An error occurred while fetching product details. Please try again later.'
        );
      },
      complete: () => {
        console.log('Product details fetching completed');
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
    },
    nav: true,
  };
  changeMainImage(image: string) {
    this.mainImage = image;
    console.log('Main image changed to:', this.mainImage);
  }
}
