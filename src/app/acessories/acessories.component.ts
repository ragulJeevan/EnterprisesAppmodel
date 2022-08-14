import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-acessories',
  templateUrl: './acessories.component.html',
  styleUrls: ['./acessories.component.css']
})
export class AcessoriesComponent implements OnInit {
  accesories:any;

  constructor(accessoriesService:ProductService,
    private adcart:CartService) { 
    this.accesories = accessoriesService.getAccesspries();
  }

  ngOnInit(): void {
  }
  addtoCart(ax:any){
    this.adcart.addtoCart(ax);
  }
}
