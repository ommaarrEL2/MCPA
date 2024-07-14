import { Component } from '@angular/core';
import { radialBarChartFunc } from '../../../../core/chartModel/apex';
import { Router } from '@angular/router';

@Component({
  selector: 'app-line-live-dashboard',
  templateUrl: './line-live-dashboard.component.html',
  styleUrl: './line-live-dashboard.component.scss',
})
export class LineLiveDashboardComponent {
  radialchartOptions1: any;
  displayModal: boolean = false;
  skuStatus!: any[];
  rangeDates!: Date[];
  chartData: any[] = [];
  hourlyValues!: any[];
  stoppageTime!: any[];
  selectedTime: number = 0;
  selectedRangeDate!: Date[];

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.radialchartOptions1 = radialBarChartFunc({
      name: 'SLE',
      series: 22,
      symbole: ' % ',
    });
  }
  getTotalParts() {
    this.displayModal = true;
  }

  getTotalPackets() {
    this.displayModal = true;
  }

  getTotalPallets() {
    this.displayModal = true;
  }

  getYieldDetails() {
    this.displayModal = true;
  }

  onCustumDate() {}
}
