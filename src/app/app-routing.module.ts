import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-dashboard',
    component:SellerDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-product',
    component:AddProductComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
