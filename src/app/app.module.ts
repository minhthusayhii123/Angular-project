import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LienheComponent } from './lienhe/lienhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    DanhsachsanphamComponent,
    DangnhapComponent,
    DangkyComponent,
    ChitietsanphamComponent,
    CheckoutComponent,
    LienheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
