import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../../core/interfaces/IProduct';
import { IProducts } from '../../core/interfaces/IProducts';
@Pipe({
  name: 'searchProduct',
})
export class SearchProductPipe implements PipeTransform {
  transform(value: IProducts, searchValue: string): IProducts {
    return value.filter(
      (product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.description.toLowerCase().includes(searchValue.toLowerCase())
    );
  }
}
