import { SharedModule } from './../../shared/shared.module';
import { LayoutModule } from './../../layout/layout.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignageStreamerRoutingModule } from './signage-streamer-routing.module';
import { SignageStreamerComponent } from './signage-streamer.component';

@NgModule({
  declarations: [SignageStreamerComponent],
  imports: [
    CommonModule,
    SignageStreamerRoutingModule,
    LayoutModule,
    SharedModule,
  ],
})
export class SignageStreamerModule {}
