import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellersComponent } from './Components/ProductComponents/bestsellers/bestsellers.component';
import { CartComponent } from './Components/ProductComponents/cart/cart.component';
import { ComputersComponent } from './Components/ProductComponents/computers/computers.component';
import { CustomerServiceComponent } from './Components/ProductComponents/customer-service/customer-service.component';
import { ElectronicsComponent } from './Components/ProductComponents/electronics/electronics.component';
import { FassionComponent } from './Components/ProductComponents/fassion/fassion.component';
import { HomeAndKitchensComponent } from './Components/ProductComponents/home-and-kitchens/home-and-kitchens.component';
import { HomeComponent } from './Components/ProductComponents/home/home.component';
import { ListComponent } from './Components/ProductComponents/list/list.component';
import { MobilesComponent } from './Components/ProductComponents/mobiles/mobiles.component';
import { SignInComponent } from './Components/ProductComponents/sign-in/sign-in.component';


const routes: Routes = [
  {path:'Mobiles', component:MobilesComponent },
  {path:'Electronics', component:ElectronicsComponent },
  {path:'home&kitchens', component:HomeAndKitchensComponent },
  {path:'Computers', component:ComputersComponent },
  {path:'CustomerService', component:CustomerServiceComponent },
  {path:'Home', component:HomeComponent },
  {path:'List', component:ListComponent },
  {path:'Bestsellers', component:BestsellersComponent },
  {path:'Fassion', component:FassionComponent },
  {path:'Cart', component:CartComponent },
  {path:'Signin', component:SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
