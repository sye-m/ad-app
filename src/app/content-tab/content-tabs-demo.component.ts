import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tabs-demo',
  templateUrl: './content-tabs-demo.component.html'
})
export class ContentTabsDemoComponent implements OnInit {
  tabs: any;

  constructor() { }

  ngOnInit() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab', active:false },
      { title: 'Blog', content: 'This is our blog',active:false },
      { title: 'Contact us', content: 'Contact us here',active:false },
    ];
  }

}
