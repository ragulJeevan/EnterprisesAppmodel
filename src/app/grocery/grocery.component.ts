import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  houseHold:any;

  constructor(groceryService:ProductService) {
    this.houseHold = groceryService.getGrocery();
   }

  ngOnInit(): void {
  }

}
