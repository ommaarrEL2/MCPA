import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMangementRoutingModule } from './user-mangement-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiSelectModule } from 'primeng/multiselect';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    UserMangementRoutingModule,
    SharedModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    NgbModule,
    MultiSelectModule,
    HttpClientModule,
    MessageModule,
  ],
  providers: [MessageService, ConfirmationService],
})
export class UserMangementModule {}
