import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialProductRoutingModule } from './material-product-routing.module';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { RdiViewComponent } from './components/rdi-view/rdi-view.component';
import { RdiTableComponent } from './components/rdi-table/rdi-table.component';
import { ViewTableComponent } from './components/4s-view/view-table.component';
import { MaterialOverviewComponent } from './components/material-overview/material-overview.component';
import { MaterialProductComponent } from './components/batches-details/material-product.component';
import { TreeModule } from 'primeng/tree';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    RdiViewComponent,
    RdiTableComponent,
    ViewTableComponent,
    MaterialOverviewComponent,
    MaterialProductComponent,
  ],
  imports: [
    CommonModule,
    MaterialProductRoutingModule,
    LayoutModule,
    SharedModule,
    CalendarModule,
    TreeModule,
    FormsModule,
    TableModule,
  ],
})
export class MaterialProductModule {}
