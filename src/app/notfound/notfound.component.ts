import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
 @Input()  visible:boolean=false;
 @Input()  notfountmessage:string="Nothing found"
 @Input()  resetlinktest:string="Reset"
 @Input()  ResetLinkRoute:string='/'

}
