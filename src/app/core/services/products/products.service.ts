import { IProducts } from '../../interfaces/IProducts';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  _HttpClient = inject(HttpClient);

  getProducts(): Observable<IProducts> {
    return this._HttpClient.get<IProducts>('https://fakestoreapi.com/products');
  }
  getProduct(id: number): Observable<IProduct> {
    return this._HttpClient.get<IProduct>(
      `https://fakestoreapi.com/products/${id}`
    );
  }
}
