import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FactoriesTreeComponent } from './components/factories-tree/factories-tree.component';
import { SleComponent } from './components/sle/sle.component';
import { TotalConsumtionComponent } from './components/total-consumtion/total-consumtion.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TreeModule } from 'primeng/tree';
@NgModule({
  declarations: [
    SharedHeaderComponent,
    SleComponent,
    TotalConsumtionComponent,
    FactoriesTreeComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DialogModule,
    ButtonModule,
    NgApexchartsModule,
    TreeModule,
  ],
  exports: [
    SharedHeaderComponent,
    DialogModule,
    ButtonModule,
    SleComponent,
    TotalConsumtionComponent,
    FactoriesTreeComponent,
  ],
})
export class SharedModule {}
