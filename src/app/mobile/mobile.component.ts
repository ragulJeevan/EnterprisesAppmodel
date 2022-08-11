import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobiles:any

  constructor(mobileService:ProductService) { 
   this.mobiles= mobileService.getMobile();
  }

  ngOnInit(): void {
  }

}
