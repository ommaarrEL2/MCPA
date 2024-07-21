import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { SelectList } from '../../../../core/models/select-list';
import { StoppageService } from '../../services/stoppage.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-configure-stoppage-catalog',
  templateUrl: './configure-stoppage-catalog.component.html',
  styleUrl: './configure-stoppage-catalog.component.scss',
})
export class ConfigureStoppageCatalogComponent {
  displayModal: boolean = false;
  form!: FormGroup;
  typeList!: { type: string; id: number }[];
  stoppageId!: number;
  stoppageList!: any;

  constructor(
    private fb: FormBuilder,
    private stoppageService: StoppageService,
    private _MessageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.initForm(0);
    this.getAllTypes();
    this.getAllStoppages();
  }

  initForm(data: any) {
    this.form = this.fb.group({
      stoppageTypeId: data.stoppageTypeId || '',
      stopName: [data.stopName || '', Validators.required],
      description: data.description || '',
      stopReason: data.stopReason || '',
      createdby: data.createdby || '',
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    if (this.stoppageId) {
      this.updateStoppage();
      return;
    }
    const formData = this.form.value;
    this.stoppageService.createStoppage(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.form.reset();
          this.getAllStoppages();
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
        this.deleteStoppage(id);
      },
    });
  }

  deleteStoppage(id: number) {
    this.stoppageService.deleteStoppage(id).subscribe({
      next: (data) => {
        this.getAllStoppages();
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

  getAllTypes() {
    this.stoppageService.getAllStoppageType().subscribe({
      next: (data) => {
        this.typeList = data;
      },
    });
  }

  getAllStoppages() {
    this.stoppageService.getAllStoppages().subscribe({
      next: (data) => {
        this.stoppageList = data;
      },
    });
  }

  updateStoppage() {
    const formData = this.form.value;
    formData.id = this.stoppageId;
    this.stoppageService.updateStoppage(formData).subscribe({
      next: (data) => {
        if (data.statusCode === 200) {
          this._MessageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `${data.message}`,
          });
          this.form.reset();
          this.getAllStoppages();
          this.stoppageId = 0;
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
