import { Component } from '@angular/core';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  success:string="";
  errorMessage:string="";

  newProduct:Product=new Product();
  constructor(private productServicec:ProductService){}

  addNewProduct(){
    console.log(this.newProduct);
    this.productServicec.addNewProduct(this.newProduct).subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.success = "Product Added Successfully.";
          this.errorMessage="";
        },
        error:(err)=>{
          console.log(err);
          console.log(err.error);
          this.errorMessage=err.error;
          
         // this.errorMessage = "Could not add Product";
          this.success="";
        }
      }
    )
  }

}
