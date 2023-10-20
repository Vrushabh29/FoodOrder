import { Injectable } from '@angular/core';
import { Cart } from '../Shared/model/cart';
import { Foods } from '../Shared/model/Food';
import { CartItem } from '../Shared/model/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart=new Cart();
  constructor() { }
  addtocart(food:Foods):void{
    let cartItem=this.cart.items.find(item=>item.food.id==food.id)
  if(cartItem)
  {
    this.changequantity(food.id, cartItem.quantity+1);
    return;
  }
  this.cart.items.push(new CartItem(food));
  }
  removefromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id!=foodId )
  }

  changequantity(quantity:number,foodId:number){
    let cartItem=this.cart.items.find(item=>item.food.id===foodId)
  if(!cartItem) return;
  cartItem.quantity=quantity
  }

  getCart():Cart{
    return this.cart
  }
}
