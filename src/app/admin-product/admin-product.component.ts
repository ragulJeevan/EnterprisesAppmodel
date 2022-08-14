import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  showTable=false;
  showCard=false;
  //mobile
  mobile1 : any;
  previewMobile:any;
  mobileForm: FormGroup|any;
  mobPrice="";
  mobTitle="";
  mobModel="";
  mobDescription="";
  //laptop
  laptop1 : any;
  previewLaptop:any;
  laptopForm: FormGroup|any;
  lapPrice="";
  lapTitle="";
  lapModel="";
  lapDescription="";
  //electronics
  electronics1 : any;
  previewElectronic:any;
  electronicForm: FormGroup|any;
  elecPrice="";
  elecTitle="";
  elecModel="";
  elecDescription="";
  //accessories
  accessories1 : any;
  previewAccessory:any;
  accessoryForm: FormGroup|any;
  accPrice="";
  accTitle="";
  accModel="";
  accDescription="";
  //fashion
  fashion1 : any;
  previewFashion:any;
  fashionForm: FormGroup|any;
  fasPrice="";
  fasTitle="";
  fasModel="";
  fasDescription="";
  //grocery
  grocery1 : any;
  previewGrocery:any;
  groceryForm: FormGroup|any;
  grocPrice="";
  grocTitle="";
  grocModel="";
  grocDescription="";


  constructor(
    private contentService:ProductService,
    ) {
    this.accessories1=contentService.getAccesspries();
    this.electronics1 = contentService.getElectronics();
    this.fashion1 = contentService.getFashion();
    this.grocery1 = contentService.getGrocery();
    this.laptop1 = contentService.getLaptop();
    this.mobile1 = contentService.getMobile();
   }

  ngOnInit(): void {
    //mobile
    // this.mobileForm = new FormGroup(
    //   {'mobTitle': new FormControl(),
    //    'mobModel':new FormControl(),
    //   'mobDescription':new FormControl(),
    //   'mobPrice':new FormControl()
    //   }
    // );
    //laptop
    //electronics
    //accessrories
    //fashion
    //grocery
  }
  // pushMobile(){
  //    const mobileTitle = this.mobileForm.get('mobTitle').value;
  //    const mobileModel = this.mobileForm.get('mobModel').value;
  //    const mobileDescription = this.mobileForm.get('mobDescription').value;
  //    const mobilePrice = this.mobileForm.get('mobPrice').value;
  // }
  addItem(){
    this.showTable=!this.showTable;
  }
  previewItem(){
    this.showCard=!this.showCard;
  }



}
