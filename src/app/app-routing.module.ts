import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'sanpham', component:DanhsachsanphamComponent},
  { path:'sanpham/:id', component:ChitietsanphamComponent},
  { path:'lienhe' , component:LienheComponent},
  { path:'dangnhap', component:DangnhapComponent},
  { path:'dangky', component:DangkyComponent},
  { path: 'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
