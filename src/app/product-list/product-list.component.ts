import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  
  selectedProducts: Product[];
  price: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
    this.price = 1
  }


  private getProducts(): Product[] {
   return [{name: 'Apple',price: '1.28'},
   {name: 'Pear',price: '3'},
   {name: 'Milk',price: '1.55'},
   {name: 'Olive oil',price: '13'}
  ]
  } 

  addSelected($event/*product: Product*/) {
    //this.selectedProducts.push($event)
    this.setTotalPrice()
    alert("function called")
  }

  private setTotalPrice() {

    let sum = 0
    for (let product of this.selectedProducts) {
      sum = sum + Number(product.price)
    }
    
    this.price = sum
  }

}
