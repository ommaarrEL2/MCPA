import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoriesOverviewComponent } from './components/factories-overview/factories-overview.component';
import { FactoryDashboardComponent } from './components/factory-dashboard/factory-dashboard.component';
import { MachineDashboardComponent } from './components/machine-dashboard/machine-dashboard.component';
import { LineDashboardComponent } from './components/line-dashboard/line-dashboard.component';

const routes: Routes = [
  { path: '', component: FactoriesOverviewComponent },
  { path: 'factory', component: FactoryDashboardComponent },
  { path: 'line', component: LineDashboardComponent },
  { path: 'machine', component: MachineDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufactureDashboardRoutingModule {}
