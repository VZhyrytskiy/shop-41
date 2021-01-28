import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  public product: ProductModel;

  // тут не должно быть зависимости, так как это презентационный компонент для отображения данных
  // он не меняет данные, он должен извещать родителя через аутпут
  constructor(private readonly productService: ProductsService) {  }

  ngOnInit(): void {  }

  public onBuy(): void {
    this.productService.decreaseProductAmount(this.product.id);
    console.log('The good was put into the basket');
  }
}
