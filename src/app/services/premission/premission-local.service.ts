import { Injectable } from '@angular/core';

import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class PremissionLocalService {

  constructor(
    private premissionService: NgxPermissionsService,
  ) { }

  loadPremmisionFromAppModule(premissionArray: Array<string>) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve( premissionArray );
      }, 2000);
    });
  }

  asyncLoadPremmision(premissionArray: Array<string>) {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        this.premissionService.loadPermissions(premissionArray);
        resolve(true);
      }, 2000);
    });
  }

  loadPremmision(premissionArray: Array<string>): void {
    this.premissionService.loadPermissions(premissionArray);
  }

}
