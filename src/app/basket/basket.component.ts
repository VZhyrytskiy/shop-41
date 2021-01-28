import { Component, OnInit } from '@angular/core';
import { BasketService } from './services/basket.service';
import { ProductModel } from '../products/models/product-model';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public productsInBasket: ProductModel[];

  constructor(private readonly basketService: BasketService) {
    this.productsInBasket = this.basketService.productsInBasket;
  }

  ngOnInit(): void {
  }

}
