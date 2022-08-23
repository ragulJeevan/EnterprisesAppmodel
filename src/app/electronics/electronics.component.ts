import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
    electronics:any;
  constructor(electronicService:ProductService,
    private adcart:CartService) { 
   this.electronics= electronicService.getElectronics();
  }

  ngOnInit(): void {
  }
addtoCart(elect:any){
  this.adcart.addtoCart(elect);
  window.alert('added to cart');
}
}
