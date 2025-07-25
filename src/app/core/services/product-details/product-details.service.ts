import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  _HttpClient = inject(HttpClient);

  getProductDetails(productId: string): Observable<IProduct> {
    return this._HttpClient.get<IProduct>(
      `https://fakestoreapi.com/products/${productId}`
    );
  }
}
