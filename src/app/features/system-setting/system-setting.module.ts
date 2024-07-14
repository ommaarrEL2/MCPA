import { SharedModule } from './../../shared/shared.module';
import { LayoutRoutingModule } from './../../layout/layout-routing.module';
import { NavbarComponent } from './../../layout/components/navbar/navbar.component';
import { LayoutModule } from './../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingRoutingModule } from './system-setting-routing.module';
import { SystemSettingHomeComponent } from './components/system-setting-home/system-setting-home.component';
import { ConfigureSkuComponent } from './components/configure-sku/configure-sku.component';
import { ConfigureOrganizationComponent } from './components/configure-organization/configure-organization.component';
import { ConfigureResourceComponent } from './components/configure-resource/configure-resource.component';
import { ConfigureHumanCapitalComponent } from './components/configure-human-capital/configure-human-capital.component';
import { ConfigureHumanCustomerCalenderComponent } from './components/configure-human-customer-calender/configure-human-customer-calender.component';
import { ConfigureWarehouseComponent } from './components/configure-warehouse/configure-warehouse.component';
import { ConfigureIotDevicesComponent } from './components/configure-iot-devices/configure-iot-devices.component';
import { ConfigureSystemSettingsComponent } from './components/configure-system-settings/configure-system-settings.component';
import { ConfigureStoppageCatalogComponent } from './components/configure-stoppage-catalog/configure-stoppage-catalog.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { PlantComponent } from './components/configure-iot-devices/components/plant/plant.component';
import { LineComponent } from './components/configure-iot-devices/components/line/line.component';
import { MachineComponent } from './components/configure-iot-devices/components/machine/machine.component';
import { ScaleComponent } from './components/configure-iot-devices/components/scale/scale.component';
import { RoomComponent } from './components/configure-iot-devices/components/room/room.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SystemSettingHomeComponent,
    ConfigureSkuComponent,
    ConfigureOrganizationComponent,
    ConfigureResourceComponent,
    ConfigureHumanCapitalComponent,
    ConfigureHumanCustomerCalenderComponent,
    ConfigureWarehouseComponent,
    ConfigureIotDevicesComponent,
    ConfigureSystemSettingsComponent,
    ConfigureStoppageCatalogComponent,
    PlantComponent,
    LineComponent,
    MachineComponent,
    ScaleComponent,
    RoomComponent,
  ],
  imports: [
    CommonModule,
    SystemSettingRoutingModule,
    LayoutModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    HttpClientModule,
    TabViewModule,
    CalendarModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  exports: [],
})
export class SystemSettingModule {}
