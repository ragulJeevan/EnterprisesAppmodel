import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  laptop:any;

  constructor(laptopService:ProductService) { 
    this.laptop= laptopService.getLaptop();
   }

  ngOnInit(): void {
  }

}
