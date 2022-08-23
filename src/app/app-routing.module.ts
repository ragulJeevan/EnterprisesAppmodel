import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessoriesComponent } from './acessories/acessories.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { ProductloginGuard } from './productlogin.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:AdminProductComponent,canActivate:[ProductloginGuard]},
  {path:'admin',component:AdminloginComponent},
  {path:'mobile',component:MobileComponent},
  {path:'lap',component:LaptopComponent},
  {path:'elect',component:ElectronicsComponent},
  {path:'accessories',component:AcessoriesComponent},
  {path:'fashion',component:FashionComponent},
  {path:'grocery',component:GroceryComponent},
  {path:'order',component:MyOrderComponent},
  {path:'wishlist',component:MyWishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
