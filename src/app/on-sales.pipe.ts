import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSales',
})
export class OnSalesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return value;
    }
    return '';
  }
}
