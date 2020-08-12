import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'; //Interacts with the browser

import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  
  selectedProducts: Product[] = [];
  price: number = 0;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }


  //TODO: Move to service and then to a mock http server
  private getProducts(): Product[] {
   return [{name: 'Apple',price: '1.28',description: 'Yay, an apple'},
   {name: 'Pear',price: '3',description: 'Like the apple but oddly expensive'},
   {name: 'Milk',price: '1.55',description: 'Insert some text here, and nutritional value maybe idk'},
   {name: 'Olive oil',price: '13',description: ':D'}
  ]
  } 

  addSelected(product?: Product) {
    this.selectedProducts.push(product)
    this.setTotalPrice()
  }

  removeSelected(product?: Product) {
    const index = this.selectedProducts.indexOf(product) //Get index of product
    this.selectedProducts.splice(index, 1)
    this.setTotalPrice()
  }

  private setTotalPrice() {

    let sum = 0
    for (let product of this.selectedProducts) {
      sum = sum + Number(product.price)
    }
    
    this.price = sum
  }

  //Navigation
  goBack() {
    this.location.back()
  }

}
