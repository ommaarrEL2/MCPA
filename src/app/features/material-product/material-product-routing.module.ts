import { RdiViewComponent } from './components/rdi-view/rdi-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialProductComponent } from './material-product.component';

const routes: Routes = [
  { path: '', component: MaterialProductComponent },
  { path: 'rdi', component: RdiViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialProductRoutingModule {}
