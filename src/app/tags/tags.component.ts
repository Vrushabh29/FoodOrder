import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../Shared/model/tag';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodpagetags?:string[];
  @Input()
  justyfyContent:string='center';
tags?:Tag[]=[]
  constructor(private fs:FoodService){

  }
  ngOnInit(): void {
    if(!this.foodpagetags)
    this.tags=this.fs.getAllTags()
    
  }
}
