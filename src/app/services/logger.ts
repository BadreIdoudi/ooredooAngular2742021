import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  logger(data: any): void {
    console.log(data);
  }
}
