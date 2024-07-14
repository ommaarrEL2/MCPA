import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufactureDashboardRoutingModule } from './manufacture-dashboard-routing.module';
import { FactoriesOverviewComponent } from './components/factories-overview/factories-overview.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { CalendarModule } from 'primeng/calendar';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { FactoryDashboardComponent } from './components/factory-dashboard/factory-dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { TabViewModule } from 'primeng/tabview';
import { FactoryCustomDashboardComponent } from './components/factory-custom-dashboard/factory-custom-dashboard.component';
import { LineLiveDashboardComponent } from './components/line-live-dashboard/line-live-dashboard.component';
import { LineCustomDashboardComponent } from './components/line-custom-dashboard/line-custom-dashboard.component';
import { MachineDashboardComponent } from './components/machine-dashboard/machine-dashboard.component';
import { FactoryLiveDashboardComponent } from './components/factory-live-dashboard/factory-live-dashboard.component';
import { LineDashboardComponent } from './components/line-dashboard/line-dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    FactoriesOverviewComponent,
    FactoryDashboardComponent,
    FactoryCustomDashboardComponent,
    LineLiveDashboardComponent,
    LineCustomDashboardComponent,
    MachineDashboardComponent,
    FactoryLiveDashboardComponent,
    LineDashboardComponent,
  ],
  imports: [
    CommonModule,
    ManufactureDashboardRoutingModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    CalendarModule,
    FormsModule,
    NgApexchartsModule,
    TreeModule,
    SharedModule,
    TabViewModule,
  ],
})
export class ManufactureDashboardModule {}
