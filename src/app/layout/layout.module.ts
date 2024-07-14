import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutModule {}
