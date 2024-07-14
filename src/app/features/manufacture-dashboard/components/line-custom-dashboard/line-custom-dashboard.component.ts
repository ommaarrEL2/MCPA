import { Component, ViewChild } from '@angular/core';
import {
  getBarChartOptions,
  radialBarChartFunc,
} from '../../../../core/chartModel/apex';
import { lossAnalysis } from '../../models/line-custom-dashboard-model';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-line-custom-dashboard',
  templateUrl: './line-custom-dashboard.component.html',
  styleUrl: './line-custom-dashboard.component.scss',
})
export class LineCustomDashboardComponent {
  displayModal: boolean = false;
  radialchartOptions1: any;
  pptpChart: any;
  barChartOptions: any;
  rangeDates!: Date[];
  skuStatus: any[] = [];
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions: any;
  lossAnalysis: lossAnalysis[] = [
    {
      x: 'Installed_Capacity',
      fillColor: '#5081bc',
      y: [0, 100],
    },
    {
      x: 'NonScheduled',
      fillColor: '#a1ca70',
      y: [100, 100.0],
    },
    {
      x: 'Asset Utilization',
      fillColor: '#a1ca70',
      y: [0, 100.0],
    },
    {
      x: 'ScheduledMaintenance',
      fillColor: '#e61e2b',
      y: [100.0, 100.0],
    },
    {
      x: 'Output',
      fillColor: '#a1ca70',
      y: [0, 100.0],
    },
    {
      x: 'Paid Time',
      fillColor: '#a1ca70',
      y: [0, 100],
    },
    {
      x: 'Maintenance_Setup',
      fillColor: '#e61e2b',
      y: [100, 100],
    },
    {
      x: 'changeOverTime CIP',
      fillColor: '#e61e2b',
      y: [100, 96],
    },
    {
      x: 'EPL',
      fillColor: '#e61e2b',
      y: [96, 91],
    },
    {
      x: 'minorStoppage',
      fillColor: '#e61e2b',
      y: [91, 89],
    },
    {
      x: 'Setup_Time',
      fillColor: '#e61e2b',
      y: [89, 89],
    },
    {
      x: 'Loss_Time',
      fillColor: '#e61e2b',
      y: [89, 87],
    },
    {
      x: 'SLE',
      fillColor: '#a1ca70',
      y: [0, 80.464],
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Production',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352],
        },
        {
          name: 'Availability',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31],
        },
        {
          name: 'Performance',
          type: 'line',
          data: [23, 5, 35, 27, 7, 22, 3, 31],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: 'Traffic Sources',
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        '01 Jan 2001',
        '02 Jan 2001',
        '03 Jan 2001',
        '04 Jan 2001',
        '05 Jan 2001',
        '06 Jan 2001',
        '07 Jan 2001',
        '08 Jan 2001',
      ],
      xaxis: {
        type: 'datetime',
      },
      yaxis: [
        {
          title: {
            text: 'Production',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Availability',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Performance',
          },
        },
      ],
    };
    this.barChartOptions = getBarChartOptions(this.lossAnalysis);

    this.radialchartOptions1 = radialBarChartFunc({
      name: 'SLE',
      series: 66,
      symbole: ' % ',
    });
    this.pptpChart = radialBarChartFunc({
      name: 'PPTP',
      series: 93,
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
}
