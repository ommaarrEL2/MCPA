import { Component, ViewChild } from '@angular/core';
import { SelectList } from '../../../../core/models/select-list';
import { Calendar } from 'primeng/calendar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-factory-dashboard',
  templateUrl: './factory-dashboard.component.html',
  styleUrl: './factory-dashboard.component.scss',
})
export class FactoryDashboardComponent {
  selectedFactory: any;
  selectedTime: number = 0;
  selectedRangeDate!: Date[];

  rangeDates!: Date[];
  machineStatus: any[] = [];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onCustumDate() {}
}
