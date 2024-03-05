import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-products',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent {

  products: Product[] = [];

  deleteProductById(id?: number) {
    console.log(id);
    if (id != undefined)
      this.productService.deleteProductById(id)
        .subscribe(
          {
            next: (data) => {
              console.log(data);
              this.loadAllProducts();
            },
            error: (err) => {
              console.log(err);
            }
          }
        )
  }
  updateProduct(product: Product) {
    console.log(product);
  }
  constructor(
    private productService: ProductService) {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.products = data;
          },
          error: (error) => {
            console.log(error);
          },
          complete: () => {
            console.log("Completed data loading");
          }
        }
      )
  }
}
