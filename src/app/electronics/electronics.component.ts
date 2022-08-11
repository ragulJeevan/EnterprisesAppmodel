import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
    electronics:any;
  constructor(electronicService:ProductService) { 
   this.electronics= electronicService.getElectronics();
  }

  ngOnInit(): void {
  }

}
