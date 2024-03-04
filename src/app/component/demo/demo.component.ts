import { Component } from '@angular/core';
import { Product } from '../../model/product'
import { DemoService } from '../../service/demo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { SquarePipe } from '../../pipes/square.pipe';
import { PowerPipe } from '../../pipes/power.pipe';
import { SumPipe } from '../../pipes/sum.pipe';
import { SortProductPipe } from '../../pipes/sort-product.pipe';
import { SearchProductPipe } from '../../pipes/search-product.pipe';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, FormsModule,SquarePipe,PowerPipe,SumPipe, SortProductPipe,SearchProductPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  query:string="";
  inputQuery:string="";
  searchProduct(){
    this.query=this.inputQuery;
  }

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  object: Object = {
    foo: 'bar', baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] }
  };
  a: number = 0.259;
  b: number = 123.3495;

  pi: number = 3.14159265359;

  currentDate: Date = new Date(); // Date.now();//
  // ngSwitch eg
  choice: number = 5;

  title = 'my-app India';
  imageUrl = "./assets/images/fish.jpg";
  url = "https://www.google.com";
  isDisabled = false;
  name = "ford";
  isEnabled = true;
  fruits: string[] = ["Apple", "Orange", "Kiwi", "Grapes"];

  products: Product[] = [];

  product: Product = new Product();
  someProduct?: Product;// =  new Product(55,"Some name",3456.00);
  isAddEnabled: boolean = false;
  // Dependency injection
  constructor(private demoService: DemoService, private activeRoute: ActivatedRoute) {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    console.log("got url id:" + id);

    this.products.push(new Product(55, "Laptop", 99.00));
    this.products.push(new Product(1, "Mouse", 33.00));
    this.products.push(new Product(5, "Charger", 77.00));
    this.products.push(new Product(2, "Cable", 55.00));
    this.products.push(new Product(99, "Apple Charger", 77.00));
    this.products.push(new Product(100, "Apple Cable", 55.00));
    this.demoService.setData(555);
    console.log(this.demoService.getData());
  }

  enableAddProduct() {
    this.isAddEnabled = true;
  }
  public addNewProduct() {
    this.products.push(this.product);
    this.product = new Product();
    this.isAddEnabled = false;
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
