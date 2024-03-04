import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'searchProduct',
  standalone: true
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], query: string): Product[]
   {

    console.log(products);
    console.log(query);

    if (products.length < 1 || query == "" ||
      query == undefined) return products;

    return products.filter((p) => {

      if (p.name != undefined) {
        //return p.name.includes(query);
        return JSON.stringify(p).toLowerCase()
          .includes(query.toLowerCase());
      }
      return false;

    });;
  }

}
