import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcToUsd',
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number, btcToUsd: boolean = true): number {
    if (btcToUsd) {
      return 54349.8 * amount;
    }
    return amount / 54349.8;
  }
}
