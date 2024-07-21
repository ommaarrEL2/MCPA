import { IShiftResponse } from './../../models/shift';
import { ShiftService } from './../../services/shift.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { SelectList } from '../../../../core/models/select-list';
import { ISkuResponse } from '../../models/config-sku';
import { ConfigSkuService } from '../../services/config-sku.service';
import { time } from 'highcharts';

@Component({
  selector: 'app-configure-human-customer-calender',
  templateUrl: './configure-human-customer-calender.component.html',
  styleUrl: './configure-human-customer-calender.component.scss',
})
export class ConfigureHumanCustomerCalenderComponent {
  shiftForm!: FormGroup;
  typeList!: SelectList[];
  shifts!: IShiftResponse[];
  shiftId!: number;
  minEndTime!: Date;

  constructor(
    private _ShiftService: ShiftService,
    private _MessageService: MessageService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm(0);
    this.getAllShifts();
  }

  initForm(data: any) {
    this.shiftForm = this.fb.group({
      orderName: data.orderName || '',
      startTime: '',
      endTime: '',
    });
  }

  initFormForUpdate(data: any) {
    this.initForm(data);
    this.shiftForm.get('startTime')?.setValue(new Date(data.startTime));
    this.shiftForm.get('endTime')?.setValue(new Date(data.endTime));
  }

  onSubmit() {
    if (this.shiftForm.invalid) {
      return;
    }
    if (this.shiftId > 0) {
      const formData = this.shiftForm.value;
      formData.id = this.shiftId;
      this._ShiftService.updateShift(formData).subscribe({
        next: (data) => {
          if (data.statusCode === 200) {
            this._MessageService.add({
              severity: 'success',
              summary: 'Success',
              detail: `${data.message}`,
            });
            this.shiftForm.reset();
            this.getAllShifts();
            this.shiftId = 0;
          } else {
            this._MessageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `${data.message}`,
            });
          }
        },
      });
    } else {
      const formData = this.shiftForm.value;
      this._ShiftService.createShift(formData).subscribe({
        next: (data) => {
          if (data.statusCode === 200) {
            this._MessageService.add({
              severity: 'success',
              summary: 'Success',
              detail: `${data.message}`,
            });
            this.shiftForm.reset();
            this.getAllShifts();
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

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this Shift?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteShift(id);
      },
    });
  }

  setMinEndTime(event: any): void {
    this.minEndTime = event;
    this.shiftForm.get('endTime')?.setValue(new Date(event));
  }

  deleteShift(id: number) {
    this._ShiftService.deleteShift(id).subscribe({
      next: (data) => {
        this.getAllShifts();
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

  getAllShifts() {
    this._ShiftService.getAllShifts().subscribe({
      next: (data) => {
        this.shifts = data;
      },
    });
  }

  updateShift(data: any) {}
}
