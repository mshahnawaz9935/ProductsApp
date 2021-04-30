import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartServiceService {

  cartItems : any = [];
  products: any =[];


  constructor() {
    this.products = [{id:1, name : 'Iphone' , desc : 'Apple Iphone' , price : 600 , url :'https://www.three.ie/content/dam/digitalexp/commerce/catalog/devices/51719-s.png'},
    { id:2, name : 'Samsung' , desc : 'Samsung phone' , price : 1000 , url :'https://www.three.ie/content/dam/digitalexp/commerce/catalog/devices/51926-s.png'},
    {id : 3, name : 'Gucci T Shirt' ,desc: 'Cotton T Shirt',price : 400, url : 'https://media.gq-magazine.co.uk/photos/5f575108020908336ccd4d82/master/w_1000,c_limit/20200907-tshirt-05.jpg'},
    {id : 4,name : 'Mr Mug', desc : 'Nice Coffee Mug', price : 45,url : 'https://www.nespresso.com/ecom/medias/sys_master/public/11905842184222/A-0397-TQ.jpg?impolicy=productPdpSafeZone&imwidth=1238'}];
   }
}
