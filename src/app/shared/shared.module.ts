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
import { PhoneNumberDirectiveDirective } from './directives/phone-number-directive.directive';
import { PasswordDirective } from './directives/password.directive';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { NavigationAreaTreeComponent } from './components/navigation-area-tree/navigation-area-tree.component';

@NgModule({
  declarations: [
    SharedHeaderComponent,
    SleComponent,
    TotalConsumtionComponent,
    FactoriesTreeComponent,
    PhoneNumberDirectiveDirective,
    PasswordDirective,
    TimeFormatPipe,
    NavigationAreaTreeComponent,
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
    TimeFormatPipe,
  ],
})
export class SharedModule {}
