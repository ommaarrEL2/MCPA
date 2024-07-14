import { ConfigureStoppageCatalogComponent } from './components/configure-stoppage-catalog/configure-stoppage-catalog.component';
import { ConfigureHumanCapitalComponent } from './components/configure-human-capital/configure-human-capital.component';
import { ConfigureSystemSettingsComponent } from './components/configure-system-settings/configure-system-settings.component';
import { ConfigureResourceComponent } from './components/configure-resource/configure-resource.component';
import { ConfigureIotDevicesComponent } from './components/configure-iot-devices/configure-iot-devices.component';
import { ConfigureWarehouseComponent } from './components/configure-warehouse/configure-warehouse.component';
import { ConfigureOrganizationComponent } from './components/configure-organization/configure-organization.component';
import { ConfigureSkuComponent } from './components/configure-sku/configure-sku.component';
import { SystemSettingHomeComponent } from './components/system-setting-home/system-setting-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigureHumanCustomerCalenderComponent } from './components/configure-human-customer-calender/configure-human-customer-calender.component';

const routes: Routes = [
  { path: '', component: SystemSettingHomeComponent },
  { path: 'sku', component: ConfigureSkuComponent },
  { path: 'warehouse', component: ConfigureWarehouseComponent },
  { path: 'organization', component: ConfigureOrganizationComponent },
  { path: 'iotDevice', component: ConfigureIotDevicesComponent },
  { path: 'resource', component: ConfigureResourceComponent },
  { path: 'systemSetting', component: ConfigureSystemSettingsComponent },
  { path: 'humanCapital', component: ConfigureHumanCapitalComponent },
  { path: 'stoppage', component: ConfigureStoppageCatalogComponent },
  {
    path: 'customerCalendar',
    component: ConfigureHumanCustomerCalenderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemSettingRoutingModule {}
