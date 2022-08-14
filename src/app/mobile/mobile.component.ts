import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobiles:any

  constructor(private mobileService:ProductService,
              private adcart:CartService,
    ) { 
   this.mobiles= mobileService.getMobile();
  }

  ngOnInit(): void {
  }
  addtoCart(mobile:any){
    this.adcart.addtoCart(mobile);
    alert('added to cart')
  }

}
