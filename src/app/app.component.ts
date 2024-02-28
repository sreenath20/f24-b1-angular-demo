import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from './model/product';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'my-app';
  imageUrl = "./assets/images/fish.jpg";
  url = "https://www.google.com";
  isDisabled = false;
  name = "ford";

  product: Product = new Product();

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
