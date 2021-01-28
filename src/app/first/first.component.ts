import { Component, OnInit } from '@angular/core';
import { Category } from '../products/models/category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public name: string;
  public description: string;
  public price: number;
  public category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
