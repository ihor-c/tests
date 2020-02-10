import { Component } from '@angular/core';

// service
import { PremissionLocalService } from './services/premission/premission-local.service'
// import { NgxPermissionsService } from 'ngx-permissions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'train-test';

  constructor(
    private localPremissionService: PremissionLocalService,
    // private premissionService: NgxPermissionsService,
  ) {
    // localPremissionService.asyncLoadPremmision(['admin']); // add admin premmision for-User
  }

}
