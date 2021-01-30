import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input()
  product: ProductModel;

  @Output()
  decreaseProductAmountEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  onBuy(): void {
    this.decreaseProductAmountEvent.emit(this.product.id);
    console.log('The good was put into the shopping cart');
  }
}
