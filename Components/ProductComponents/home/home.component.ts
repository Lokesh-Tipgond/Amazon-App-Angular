import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public ProductList : any ;

  constructor(private api :ApiServiceService, private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()  
    .subscribe(res=>{
      this.ProductList = res; 
      this.ProductList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
     })
  }

  addtocart(item:any){ 
this.cartservice.addtoCart(item);
  }
}
