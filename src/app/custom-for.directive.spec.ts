import { CustomForDirective } from './custom-for.directive';
import { ViewContainerRef, TemplateRef, IterableDiffers } from '@angular/core';

describe('CustomForDirective', () => {
  it('should create an instance', () => {
    let viewRef:ViewContainerRef; 
              let template:TemplateRef<any>
              let differs:IterableDiffers
    const directive = new CustomForDirective(viewRef, template, differs);
    expect(directive).toBeTruthy();
  });
});
