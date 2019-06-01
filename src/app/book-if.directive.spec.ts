import { BookIfDirective } from './book-if.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';

describe('BookIfDirective', () => {
  it('should create an instance', () => {
  let view:ViewContainerRef;
   let template:TemplateRef<any>;
    const directive = new BookIfDirective(view, template);
    expect(directive).toBeTruthy();
  });
});
