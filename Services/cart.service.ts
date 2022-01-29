import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = []
  public ProductList = new BehaviorSubject<any>([]);

  constructor() { }

  getProduct() {
    return this.ProductList.asObservable();
  }
  setProduct(Product: any) {
    this.cartItemList.push(...Product);
    this.ProductList.next(Product);
  }
  addtoCart(Product: any) {
    this.cartItemList.push(Product);
    this.ProductList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {  
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.Total;
    })
    return grandTotal;
  }
  removeCartItem(Product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (Product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }

    })
    this.ProductList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.ProductList.next(this.cartItemList);
  }

}
