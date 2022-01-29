import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MenubarComponent } from './Components/menubar/menubar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MobilesComponent } from './Components/ProductComponents/mobiles/mobiles.component';
import { ElectronicsComponent } from './Components/ProductComponents/electronics/electronics.component';
import { FassionComponent } from './Components/ProductComponents/fassion/fassion.component';
import { ComputersComponent } from './Components/ProductComponents/computers/computers.component';
import { CustomerServiceComponent } from './Components/ProductComponents/customer-service/customer-service.component';
import { HomeAndKitchensComponent } from './Components/ProductComponents/home-and-kitchens/home-and-kitchens.component';
import { HomeComponent } from './Components/ProductComponents/home/home.component';
import { BestsellersComponent } from './Components/ProductComponents/bestsellers/bestsellers.component';
import { ListComponent } from './Components/ProductComponents/list/list.component';
import { CartComponent } from './Components/ProductComponents/cart/cart.component';
import { ProductCartComponent } from './Components/ProductComponents/product-cart/product-cart.component';
import { SignInComponent } from './Components/ProductComponents/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    FooterComponent,
    MobilesComponent,
    ElectronicsComponent,
    FassionComponent,
    ComputersComponent,
    CustomerServiceComponent,
    HomeAndKitchensComponent,
    HomeComponent,
    BestsellersComponent,
    ListComponent,
    CartComponent,
    ProductCartComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
