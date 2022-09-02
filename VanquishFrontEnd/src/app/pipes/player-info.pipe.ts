import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerInfo'
})
export class PlayerInfoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
