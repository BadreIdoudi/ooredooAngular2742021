import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private logger: Logger) {}

  sayHello(): void {
    this.logger.logger('hello :D');
  }
}
