import { Component ,OnInit} from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../Shared/model/Food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=[]
  constructor(private fs:FoodService,private router:ActivatedRoute){}

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      if(params['searchItem'])
      this.foods=this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    else if(params['tag'])
    this.foods=this.fs.getAllFoodByTag(params['tag']);
    else
    this.foods=this.fs.getAll();
  })
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
