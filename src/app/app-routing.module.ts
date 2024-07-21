import { SystemSettingHomeComponent } from './features/system-setting/components/system-setting-home/system-setting-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [authGuard],
  },
  {
    path: 'manufacture',
    loadChildren: () =>
      import(
        './features/manufacture-dashboard/manufacture-dashboard.module'
      ).then((m) => m.ManufactureDashboardModule),
    canActivate: [authGuard],
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./features/system-setting/system-setting.module').then(
        (m) => m.SystemSettingModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'material',
    loadChildren: () =>
      import('./features/material-product/material-product.module').then(
        (m) => m.MaterialProductModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'alarms-panel',
    loadChildren: () =>
      import('./features/alarms-panel/alarms-panel.module').then(
        (m) => m.AlarmsPanelModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'userManagement',
    loadChildren: () =>
      import('./features/user-mangement/user-mangement.module').then(
        (m) => m.UserMangementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
