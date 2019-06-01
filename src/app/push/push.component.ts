import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-push',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css']
})
export class PushComponent implements OnInit {
  @Input() items: Observable<number>;
  counter:number = 0;
  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.items.subscribe(v => {
      console.log("Value of obs: ", v);
      this.counter++;
      if(this.counter % 5 == 0) {
        this.cdr.markForCheck();
      }
    },
    null,
    () => {
      this.cdr.markForCheck();
    })
  }

}
