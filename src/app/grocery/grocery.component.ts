import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  houseHold:any;

  constructor(groceryService:ProductService,
   private adgrocery:CartService) {
    this.houseHold = groceryService.getGrocery();
   }

  ngOnInit(): void {}
  addGrocery(gros:any){
    this.adgrocery.addGrocery(gros);
  }


}
