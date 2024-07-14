import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialProductRoutingModule } from './material-product-routing.module';
import { MaterialProductComponent } from './material-product.component';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { CalendarModule } from 'primeng/calendar';
import { RdiViewComponent } from './components/rdi-view/rdi-view.component';
import { RdiTableComponent } from './components/rdi-table/rdi-table.component';
import { ViewTableComponent } from './components/view-table/view-table.component';

@NgModule({
  declarations: [
    MaterialProductComponent,
    RdiViewComponent,
    RdiTableComponent,
    ViewTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialProductRoutingModule,
    LayoutModule,
    SharedModule,
    CalendarModule,
  ],
})
export class MaterialProductModule {}
