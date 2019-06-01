import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ngBookIf]'
})
export class BookIfDirective {

  constructor(private view:ViewContainerRef, private template:TemplateRef<any>) { }
  @Input() set ngBookIf(condition) {
    if(condition) this.view.createEmbeddedView(this.template);
    else this.view.clear();
  }
}
