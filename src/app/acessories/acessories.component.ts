import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-acessories',
  templateUrl: './acessories.component.html',
  styleUrls: ['./acessories.component.css']
})
export class AcessoriesComponent implements OnInit {
  accesories:any;

  constructor(accessoriesService:ProductService) { 
    this.accesories = accessoriesService.getAccesspries();
  }

  ngOnInit(): void {
  }

}
