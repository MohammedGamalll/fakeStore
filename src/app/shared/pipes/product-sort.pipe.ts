import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSort',
})
export class ProductSortPipe implements PipeTransform {
  transform(products: any[], sortType: string): any[] {
    if (!products || !sortType) return products;
    let sorted = [...products];

    switch (sortType) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    return sorted;
  }
}
