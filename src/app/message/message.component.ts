import { Component, OnInit, Input, HostBinding, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit,OnChanges {
  @HostBinding("attr.class") cssClass = "message";
  @Input() name:String = "";
  @Input() comment:String = "";
  constructor() { 
  }

  ngOnChanges(changes:{[propName:string]:SimpleChange}):void {
    console.log(changes);
  }
 
  ngOnInit() {
  }

}
