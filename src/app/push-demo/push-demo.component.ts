import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-push-demo',
  templateUrl: './push-demo.component.html',
  styleUrls: ['./push-demo.component.css']
})
export class PushDemoComponent implements OnInit {
  itemsObs:Observable<any>;
  num:Observable<any>=new Observable<0>();
  count = 0;
  constructor() { }

  ngOnInit() {

}
}
