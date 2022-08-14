import { Component, ElementRef, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { getIdToken } from 'firebase/auth';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  public product : any=[];
  public grocery:any=[]; 

  constructor(public cart:CartService) { }

  ngOnInit(): void {
    this.cart.getPoducts().subscribe(res=>{
      this.product=res;
    }),
    this.cart.getgrocery().subscribe(res=>
      {this.grocery=res;
      })
    }
  
  }


