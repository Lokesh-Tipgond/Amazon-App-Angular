import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-home-and-kitchens',
  templateUrl: './home-and-kitchens.component.html',
  styleUrls: ['./home-and-kitchens.component.css']
})
export class HomeAndKitchensComponent implements OnInit {
  public ProductList : any ;
  constructor(private api :ApiServiceService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.ProductList = res;
     })
  }

}
