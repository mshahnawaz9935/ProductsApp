import { Component, OnInit } from '@angular/core';
import { AddToCartServiceService} from '../add-to-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any =[];
  alert : boolean = false;
  results : string = "";


  constructor(public CartService : AddToCartServiceService) {
    
   }

  ngOnInit(): void {

   
  }

  addToCart(product)
  {
    this.CartService.cartItems.push(product.id);
    this.alert = true;
    this.results = product.name + ' added to cart';
    setTimeout(() => {
      this.alert = false;
      this.results = "";
    },800);

  }

}
