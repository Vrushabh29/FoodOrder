import { Injectable } from '@angular/core';
import { Foods } from 'src/app/Shared/model/Food';
import { Tag } from 'src/app/Shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
getfoodbuid(id:number):Foods
{
  return this.getAll().find(food=>food.id==id)!;
}

  getAllFoodByTag(tag:string):Foods[]
  {
    if(tag=='All')
    return this.getAll();
    else
    return this.getAll().filter(food=>food.tags?.includes(tag));

  }
  
  getAllTags():Tag[]{
    return[
      {name:'All', count:14},
      {name:'lunch',count:3},
      {name:'slowfood',count:3},
      {name:'snacks',count:2},
      {name:'fastfood',count:1}
    ];

  }

  getAll():Foods[]
  {
    return [{
      id:1,
        price:199,
        name: "Pizza",
        favourite:false,
        star:4.2,
        tags:['slowfood','lunch'],
        imageurl:'/assets/food1.jpg',
        cookTime:'40-50',
        origins:['Italy','India','French'],
    },
    {
      id:2,
        price:100,
        name: "Chicken Balls",
        favourite:false,
        star:4.5,
        tags:['slowfood','lunch'],
        imageurl:'/assets/food2.jpg',
        cookTime:'20-30',
        origins:['Italy','India'],
    },
    {
      id:3,
        price:64,
        name: "Burger",
        favourite:false,
        star:4.0,
        tags:['slowfood','snacks'],
        imageurl:'/assets/food3.jpg',
        cookTime:'10-15',
        origins:['Italy','India','French'],
    },
    {
      id:4,
        price:50,
        name: "French Fries",
        favourite:false,
        star:3.8,
        tags:['fastfood','snacks'],
        imageurl:'/assets/food4.jpg',
        cookTime:'10-15',
        origins:['Italy','French'],
    },{
      id:5,
        price:50,
        name: "Momos",
        favourite:false,
        star:5.0,
        tags:['fastfood','snacks'],
        imageurl:'/assets/food5.jpg',
        cookTime:'20-30',
        origins:['Italy','French','China'],
    },
    {
      id:6,
        price:85,
        name: "Pavbhaji",
        favourite:false,
        star:4.7,
        tags:['fastfood','lunch'],
        imageurl:'/assets/food6.jpg',
        cookTime:'20-30',
        origins:['India'],
    },{
      id:7,
        price:190,
        name: "Chicken Lollipop",
        favourite:false,
        star:3.0,
        tags:['fastfood','lunch','Statter'],
        imageurl:'/assets/food7.jpg',
        cookTime:'40-45',
        origins:['India'],
    },{
      id:7,
        price:65,
        name: "Franky",
        favourite:false,
        star:3.4,
        tags:['fastfood','lunch','Statter'],
        imageurl:'/assets/food8.jpg',
        cookTime:'10-15',
        origins:['Italy','French','China'],
    }
      
    ]
  }
  
}

