import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sortProduct',
  standalone: true
})
export class SortProductPipe implements PipeTransform {
  transform(products: Product[], 
    option: string = "name"): Product[] {
    console.log("product sort products:"+products);
    console.log("option:"+option);

    switch (option) {

      case "name":
        products.sort((p1,p2)=>{

          if(p1.name !=undefined && p2.name !=undefined)
          {
            if(p1.name > p2.name) return 1;
            else
            if(p1.name < p2.name) return -1;
          }
          return 0;
          
        });

        break;
      case "price":

        break;
      case "id":
      default:


    }
    return products;
  }

}
