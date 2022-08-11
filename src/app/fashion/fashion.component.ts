import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  garments:any;

  constructor(fashionService:ProductService) {
    this.garments=fashionService.getFashion();
   }

  ngOnInit(): void {
  }

}
