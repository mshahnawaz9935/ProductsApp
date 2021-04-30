import { visitAll } from '@angular/compiler/src/render3/r3_ast';
import { createDirectiveTypeParams } from '@angular/compiler/src/render3/view/compiler';
import { Component, OnInit } from '@angular/core';
import { AddToCartServiceService} from '../add-to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  finalItems: any =[];
  totalPrice: number = 0;
  

  constructor(public CartService : AddToCartServiceService) {

    let counts = {};

   CartService.cartItems.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

   for(var i = 0 ; i < CartService.products.length;i++)
   {
     var item = CartService.products[i];
     item.quantity = counts[item.id];
     if(item.quantity == undefined)
     item.quantity = 0;
     if(item.quantity >= 3)
     this.totalPrice = this.totalPrice + (item.quantity - 1) * item.price ;
     else    this.totalPrice = this.totalPrice + (item.quantity) * item.price ;
     this.finalItems.push(item);
   }
 
  }
  ngOnInit(): void {
  }
  deleteItems(item)
  {
    console.log(item);
    var index = this.finalItems.indexOf(item);
    this.finalItems.splice(index, 1);
    if(item.quantity >= 3)
    this.totalPrice = this.totalPrice - (item.price * (item.quantity - 1));
    else  this.totalPrice = this.totalPrice - (item.price * item.quantity);
    while(this.CartService.cartItems.indexOf(item.id) != -1)
    {
      this.CartService.cartItems.splice(this.CartService.cartItems.indexOf(item.id) , 1);

    }
  }

}
