import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  laptop:any;

  constructor(laptopService:ProductService,private adcart:CartService) { 
    this.laptop= laptopService.getLaptop();
   }

  ngOnInit(): void {
  }
  addtoCart(lap:any){
    this.adcart.addtoCart(lap);
  }


}
