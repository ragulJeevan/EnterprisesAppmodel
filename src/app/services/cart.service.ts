import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItem : any=[];
  public groceryCart:any=[];
  public productList = new BehaviorSubject<any>([]);
  public groceryList = new BehaviorSubject<any>([])

  constructor() { }
  getPoducts(){
   return this.productList.asObservable();
  }
  // setProducts(product:any){
  //   this.cartItem.push(product);
  //   this.productList.next(product);
  // }
  addtoCart(product:any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    this.getTotalPrice();
  }
  //grocery cart
  getgrocery(){
    return this.groceryList.asObservable();
   }
   addGrocery(grocery:any){
    this.groceryCart.push(grocery);
    this.groceryList.next(this.groceryCart);
    this.getTotalPrice();
   }
   getTotalPrice(){
    let grandTotal=0;
    this.cartItem.map((a:any)=>{
      grandTotal += a.total;
    })
   }
}
