import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from './model/product';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
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
  constructor() {
    this.products.push(new Product(55, "Laptop", 99.00));
    this.products.push(new Product(1, "Mouse", 33.00));
    this.products.push(new Product(5, "Charger", 77.00));
    this.products.push(new Product(2, "Cable", 55.00));
    
  }
  public addNewProduct(){
    this.products.push(this.product);
    this.product= new Product();
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
