import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignageStreamerComponent } from './signage-streamer.component';

const routes: Routes = [{ path: '', component: SignageStreamerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignageStreamerRoutingModule { }
