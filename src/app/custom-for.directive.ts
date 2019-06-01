import { Directive, ViewContainerRef, TemplateRef, IterableDiffers, ViewRef, IterableDiffer, Input, DoCheck, SimpleChange } from '@angular/core';

@Directive({
  selector: '[ngCustomFor]'
})
export class CustomForDirective implements DoCheck {
  private differ:IterableDiffer<any>
  private items:any;
  views:Map<any,ViewRef> = new Map<any, ViewRef>();
  constructor(private viewRef:ViewContainerRef, 
              private template:TemplateRef<any>, 
              private differs:IterableDiffers) { }
  @Input() set ngCustomForOf(items) {
      this.items = items;
      if(this.items && !this.differ) {
        this.differ = this.differs.find(items).create();
      }
    }
    ngDoCheck() :void{
      if(this.differ) {
        const changes = this.differ.diff(this.items);
        if(changes) {
          changes.forEachAddedItem(change => {
           const view = this.viewRef.createEmbeddedView(this.template, 
            {$implicit:change.item });
            this.views.set(change.item, view);
          })
          changes.forEachRemovedItem(change => {
            const view = this.viewRef.get(change.item);
            const indx = this.viewRef.indexOf(view);
            this.viewRef.remove(indx);
            this.views.delete(change.item);
          })
        }
      }
    }
}
