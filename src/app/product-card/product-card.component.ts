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
  buttonText: string = "Add to cart"

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelected() {
    this.isSelected = !this.isSelected
    
    if (this.isSelected) {
      //Add product to list on parent component (Product list_
      this.addSelected.emit(this.product)
      this.buttonText = "Remove from cart"
    } else {
      //Notify to delete a product of the list
      this.removeSelected.emit(this.product)
      this.buttonText = "Add to cart"
    }
  }

  /**For changing the button class and text when status changed**/
  fIsSelected(): boolean {
    return this.isSelected
  }
}
