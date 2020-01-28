import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogerService {

  constructor() { }

  public log( data ): void {
    console.log(data)
  }

}
