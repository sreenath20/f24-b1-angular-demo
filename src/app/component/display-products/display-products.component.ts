import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-products',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent {

  products:Product[]=[];
  constructor(private productService:ProductService){
    this.productService.getAllProducts().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.products = data;
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }
}
