import { RdiViewComponent } from './components/rdi-view/rdi-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialOverviewComponent } from './components/material-overview/material-overview.component';
import { MaterialProductComponent } from './components/batches-details/material-product.component';

const routes: Routes = [
  { path: '', component: MaterialOverviewComponent },
  { path: 'rdi', component: RdiViewComponent },
  { path: 'batches', component: MaterialProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialProductRoutingModule {}
