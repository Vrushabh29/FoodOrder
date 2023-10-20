import { Component, OnInit } from '@angular/core';
import { Foods } from '../Shared/model/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!:Foods;
  constructor( private route:ActivatedRoute, private fs:FoodService,private cartService:CartService, private router:Router){
route.params.subscribe((params)=>{
  if(params['id'])
  this.food=this.fs.getfoodbuid(params['id'])
})
  }
  ngOnInit(): void {
    
  }

  Addtocart(){
    this.cartService.addtocart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
