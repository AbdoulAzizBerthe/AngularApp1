import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public  getProducts(){
    return this.http.get<Array<any>>("http://localhost:8089/products");
  }

  public checkProduct(product:Product):Observable<Product>{
    return this.http.patch<any>(`https://localhost:8089/products/${product.id}`,{
      checked:!product.checked
    });
  }


}
