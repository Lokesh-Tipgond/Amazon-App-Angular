import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 public Product :any = []
 public grandTotal =0;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProduct()
    .subscribe(res=>{ 
      this.Product=res;
      this.grandTotal=this.cartservice.getTotalPrice();
    })
  } 
  removeItem(item:any){
    this.cartservice.removeCartItem(item);
   }

   emptycart(){
     this.cartservice.removeAllCart();
    }

}
