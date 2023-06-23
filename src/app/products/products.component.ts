import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  produvts :Array<Product> =[]

  constructor(private productservice:ProductService) {

  }

  ngOnInit(): void {
    this.productservice.getProducts()
      .subscribe({
      next : data => this.produvts=data,
      error : err => {
        console.log(err);
      }
    })
  }


  handleCheckProduct(product: any) {
    this.productservice.checkProduct(product)
      .subscribe({
      next : updateProduct => {
        product.checked=!product.checked;
        //this.getProducts();
      }
    })
  }

}
