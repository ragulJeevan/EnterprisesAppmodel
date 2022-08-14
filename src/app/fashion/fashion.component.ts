import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  garments:any;

  constructor(fashionService:ProductService,
    private adcart:CartService) {
    this.garments=fashionService.getFashion();
   }

  ngOnInit(): void {
  }
  addtoCart(fash:any){
    this.adcart.addtoCart(fash);
  }

}
