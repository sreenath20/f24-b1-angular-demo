import { Component } from '@angular/core';
import { Product} from '../../model/product'
import { DemoService } from '../../service/demo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
 // ngSwitch eg
 choice:number=5;

 title = 'my-app';
 imageUrl = "./assets/images/fish.jpg";
 url = "https://www.google.com";
 isDisabled = false;
 name = "ford";
 isEnabled = true;
 fruits: string[] = ["Apple", "Orange", "Kiwi", "Grapes"];

 products: Product[] = [];

 product: Product = new Product();
 someProduct?: Product;// =  new Product(55,"Some name",3456.00);
 isAddEnabled:boolean=false;
 // Dependency injection
 constructor(private demoService:DemoService) {
   this.products.push(new Product(55, "Laptop", 99.00));
   this.products.push(new Product(1, "Mouse", 33.00));
   this.products.push(new Product(5, "Charger", 77.00));
   this.products.push(new Product(2, "Cable", 55.00));
   this.demoService.setData(555);  
   console.log(this.demoService.getData());
 }

 enableAddProduct(){
   this.isAddEnabled=true;
 }
 public addNewProduct(){
   this.products.push(this.product);
   this.product= new Product();
   this.isAddEnabled=false;
 }
 public assignProduct() {

   this.someProduct = new Product(55, "Some name", 3456.00);
 }
 public addProduct() {
   console.log(this.product);
 }
 public greet() {
   window.alert("Welcome to app");
 }
 public changeImage() {
   if (this.imageUrl == "")
     this.imageUrl = "./assets/images/fish.jpg";
   else
     this.imageUrl = "";
 }
 public displayName() {
   console.log(this.name);
 }

}
