import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product
  @Output() addSelected = new EventEmitter<any>() //Function to notify the list of a selected Product
  @Output() removeSelected = new EventEmitter<any>()


  isSelected: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelected() {
    this.isSelected = !this.isSelected
    
    if (this.isSelected) {
      //Add product to list on parent component (Product list_
      this.addSelected.emit(this.product)
    } else {
      //Notify to delete a product of the list
      this.removeSelected.emit(this.product)
    }
  }
}
