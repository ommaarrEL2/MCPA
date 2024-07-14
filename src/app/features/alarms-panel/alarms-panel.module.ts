import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmsPanelRoutingModule } from './alarms-panel-routing.module';
import { AlarmsPanelComponent } from './alarms-panel.component';
import { LayoutModule } from '../../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AlarmsPanelComponent],
  imports: [CommonModule, AlarmsPanelRoutingModule, LayoutModule, SharedModule],
})
export class AlarmsPanelModule {}
