import { Component, Pipe } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe {
  transform(inputVal: string) {
    inputVal = inputVal;

    const areaCodeStr = inputVal.slice(0, 3);
    const midSectionStr = inputVal.slice(3, 6);
    const lastSectionStr = inputVal.slice(6, 10);

    return `(${areaCodeStr}) ${midSectionStr}-${lastSectionStr}`;
  }
}
