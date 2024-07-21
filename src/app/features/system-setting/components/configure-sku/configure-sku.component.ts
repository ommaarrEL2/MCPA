import { ISkuResponse } from './../../models/config-sku';
import { SelectList } from './../../../../core/models/select-list';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfigSkuService } from './../../services/config-sku.service';
import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-configure-sku',
  templateUrl: './configure-sku.component.html',
  styleUrl: './configure-sku.component.scss',
})
export class ConfigureSkuComponent {
  displayModal: boolean = false;
  skuForm!: FormGroup;
  typeList!: SelectList[];
  products!: ISkuResponse[];
  productId!: number;
  constructor(
    private _ConfigSkuService: ConfigSkuService,
    private _MessageService: MessageService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm(0);
    this.getAllStoppageType();
    this.getAllSkus();
  }

  initForm(data: any) {
    this.skuForm = this.fb.group({
      name: [data.name || '', [Validators.required]],
      code: [data.code || '', [Validators.required]],
      createdBy: data.createdBy || '',
      creationDate: [new Date(data.creationDate) || '', [Validators.required]],
      uom: data.uom || '',
      status: data.status || '',
      productCategoryId: data.productCategoryId || '',
    });
  }

  onSubmit() {
    if (this.skuForm.invalid) {
      return;
    }
    if (this.productId) {
      this.updateSku();
      return;
    }
    const formData = this.skuForm.value;
    this._ConfigSkuService.createSku(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.skuForm.reset();
          this.getAllSkus();
        } else {
          this._MessageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this Sku?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteSku(id);
      },
    });
  }

  deleteSku(id: number) {
    this._ConfigSkuService.deleteSku(id).subscribe({
      next: (data) => {
        this.getAllSkus();
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Confirmed',
            detail: `${data.message}`,
          });
        } else {
          this._MessageService.add({
            severity: 'error',
            summary: 'error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }

  getAllStoppageType() {
    this._ConfigSkuService.getAllSkuType().subscribe({
      next: (data) => {
        this.typeList = data;
      },
    });
  }

  getAllSkus() {
    this._ConfigSkuService.getAllSkus().subscribe({
      next: (data) => {
        this.products = data;
      },
    });
  }

  updateSku() {
    const formData = this.skuForm.value;
    formData.id = this.productId;
    this._ConfigSkuService.updateSku(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.skuForm.reset();
          this.getAllSkus();
          this.productId = 0;
        } else {
          this._MessageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${data.message}`,
          });
        }
      },
    });
  }
}
