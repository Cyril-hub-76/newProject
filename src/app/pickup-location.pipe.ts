import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pickupLocation'
})
export class PickupLocationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
