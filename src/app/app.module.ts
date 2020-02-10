import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module for Premmisions
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

// pages
import { MyTestsComponent } from './pages/my-tests/my-tests.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ValidatorPageComponent } from './pages/validator-page/validator-page.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { LoginComponent } from './pages/login/login.component';
import { NoPremmisionComponent } from './pages/no-premmision/no-premmision.component';

// components
import { CalculatorComponent } from './components/calculator/calculator.component';

// service
import { PremissionLocalService } from './services/premission/premission-local.service'

@NgModule({
  declarations: [
    AppComponent,

    CalculatorComponent,

    MyTestsComponent,
    AdminPageComponent,
    UserPageComponent,
    ValidatorPageComponent,
    CabinetComponent,
    LoginComponent,
    NoPremmisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    PremissionLocalService,
    {
      provide: APP_INITIALIZER,
      useFactory: (pls: PremissionLocalService, ps: NgxPermissionsService ) => function() {
        return pls.loadPremmisionFromAppModule(['admin']).then((data: any) => {
          return ps.loadPermissions(data)
        });
      },
      deps: [PremissionLocalService, NgxPermissionsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
