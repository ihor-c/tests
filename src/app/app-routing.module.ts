import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { NgxPermissionsGuard } from 'ngx-permissions';

// pages
import { LoginComponent } from './pages/login/login.component';
import { CabinetComponent } from './pages/cabinet/cabinet.component';
import { MyTestsComponent } from './pages/my-tests/my-tests.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NoPremmisionComponent } from './pages/no-premmision/no-premmision.component';
import { ValidatorPageComponent } from './pages/validator-page/validator-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'title', component: MyTestsComponent },
  { path: '', redirectTo: 'title', pathMatch: 'full'},
  { path: 'cabinet', component: CabinetComponent, 
    children: [
      { path: 'user', component: UserPageComponent, canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['user'],
            redirectTo: 'login',
          }
        }
      },
      { path: 'admin', component: AdminPageComponent, canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['admin'],
            redirectTo: 'login',
          }
        }
      },
      { path: 'validator', component: ValidatorPageComponent, canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['validator'],
            redirectTo: 'login',
          }
        }
      },
      { path: 'no-premmision-user', component: NoPremmisionComponent },
      { path: 'no-premmision-vallidator', component: NoPremmisionComponent },
      { path: 'no-premmision-admin', component: NoPremmisionComponent },
      { path: '**', component: NoPremmisionComponent},
    ], 
    canActivate: [NgxPermissionsGuard], 
    data: {
      permissions: {
        only: ['user', 'admin', 'validator'],
        redirectTo: {
          // user: {
          //   navigationCommands: ['cabinet/user'],
          //   navigationExtras: {
          //     skipLocationChange: true
          //   },
          // },
          user: (rejectedPermissionName: string, activateRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot) => {
            console.log(rejectedPermissionName);
            return '/user';
          },
          // admin: {
          //   navigationCommands: ['cabinet/admin'],
          //   navigationExtras: {
          //     skipLocationChange: true
          //   },
          // },
          admin: (rejectedPermissionName: string, activateRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot) => {
            console.log(rejectedPermissionName);
            return '/admin';
          },
          // validator: {
          //   navigationCommands: ['cabinet/validator'],
          //   navigationExtras: {
          //     skipLocationChange: true
          //   },
          // },
          validator: (rejectedPermissionName: string, activateRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot) => {
            console.log(rejectedPermissionName);
            return 'validator';
          },
          default: 'login'
        }
      }
    }
  },
  { path: '**', redirectTo: 'title', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
