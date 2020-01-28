import { Injectable } from '@angular/core';
import { LogerService } from './loger.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private logerService: LogerService
  ) {}

  public getString(str: string) {
    this.logerService.log(str);
    return str;
  }

  public concatString(str1: string, str2: string) {
    this.logerService.log(str1);
    this.logerService.log(str2);
    return str1 + str2;
  }

}
