import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
  
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.http.get(
      "http://localhost:8090/products");
  }
  public addNewProduct(newProduct:Product)
  :Observable<any>{

    return this.http.post(
      "http://localhost:8090/product",newProduct);
  }
  public deleteProductById(id:number):Observable<any>{
    return this.http.delete("http://localhost:8090/product/"+id);
  }
}
