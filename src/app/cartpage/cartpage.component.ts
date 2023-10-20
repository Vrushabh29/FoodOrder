import { Component, OnInit } from '@angular/core';
import { Cart } from '../Shared/model/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../Shared/model/cartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartServices:CartService){
    
    this.setcart();
  }
  ngOnInit(): void {
    
  }

  setcart(){
    this.cart=this.cartServices.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartServices.removefromCart(cartItem.food.id)
    this.setcart();
  }
  changeQuantity(cartItem:CartItem,quantityInstring:string)
  {
    const quantity=parseInt(quantityInstring);
    this.cartServices.changequantity(cartItem.food.id,quantity);
    this.setcart();
  }
}
