import { Component, Input, ViewChild } from '@angular/core';
import {
  machineList,
  manpowerList,
  materialList,
} from '../../models/machine-dashboard-model';
import { TimelineChartModel } from '../../../../core/chartModel/apex';
import { ChartOptions } from 'highcharts';
import { ChartComponent } from 'ng-apexcharts';
import { DrilDownChartModelRefactor } from '../../../../core/chartModel/HChart';

@Component({
  selector: 'app-machine-dashboard',
  templateUrl: './machine-dashboard.component.html',
  styleUrl: './machine-dashboard.component.scss',
})
export class MachineDashboardComponent {
  materialList: materialList[] = [];
  selectedTime: number = 0;
  selectedRangeDate!: Date[];
  manpowerList: manpowerList[] = [];
  rangeDates!: Date[];
  machineStatus: machineList[] = [];
  timeLine!: any[];
  TimeLineChartOptionsL: any = {};
  timeLineData: any = [
    {
      name: 'Online',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T08:00:28.8127942', '2024-07-03T09:35:20.3830205'],
          fillColor: '#a1ca70',
        },
      ],
    },
    {
      name: 'Online',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T09:35:20.3830205', '2024-07-03T13:55:33.2760072'],
          fillColor: '#a1ca70',
        },
      ],
    },
    {
      name: 'OffLine',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T13:55:33.2760072', '2024-07-03T14:01:11.2508489'],
          fillColor: '#e61e2b',
        },
      ],
    },
    {
      name: 'Online',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T14:01:11.2508489', '2024-07-03T16:46:46.5850995'],
          fillColor: '#a1ca70',
        },
      ],
    },
    {
      name: 'Online',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T16:46:46.5850995', '2024-07-03T16:57:16.2597616'],
          fillColor: '#a1ca70',
        },
      ],
    },
    {
      name: 'Online',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T16:57:16.2597616', '2024-07-03T19:26:35.6171435'],
          fillColor: '#a1ca70',
        },
      ],
    },
    {
      name: 'OffLine',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T19:26:35.6171435', '2024-07-03T19:31:11.9655776'],
          fillColor: '#e61e2b',
        },
      ],
    },
    {
      name: 'Online',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T19:31:11.9655776', '2024-07-03T21:03:50.3555003'],
          fillColor: '#a1ca70',
        },
      ],
    },
    {
      name: 'Online',
      data: [
        {
          x: 'Line 5',
          y: ['2024-07-03T21:03:50.3555003', '2024-07-03T21:49:32.5534073'],
          fillColor: '#a1ca70',
        },
      ],
    },
  ];
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: any;

  constructor() {}

  ngOnInit(): void {
    this.timeLineData = this.timeLineData.map(
      (x: { name: any; data: { x: any; y: any[]; fillColor: any }[] }) => {
        return {
          name: x.name,
          data: x.data.map((z: { x: any; y: any[]; fillColor: any }) => {
            return {
              x: z.x,
              y: z.y.map(
                (z) =>
                  new Date(z).getTime() +
                  new Date().getTimezoneOffset() * -60 * 1000
              ),
              fillColor: z.fillColor,
            };
          }),
        };
      }
    );
    this.TimeLineChartOptionsL = TimelineChartModel({
      series: this.timeLineData,
      min: this.timeLineData[0].data[0].y[0],
    });
    const series = {
      monthDataSeries1: {
        prices: [
          8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3,
          8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9,
          8496.25, 8600.65, 8881.1, 9340.85,
        ],
        dates: [
          '13 Nov 2017',
          '14 Nov 2017',
          '15 Nov 2017',
          '16 Nov 2017',
          '17 Nov 2017',
          '20 Nov 2017',
          '21 Nov 2017',
          '22 Nov 2017',
          '23 Nov 2017',
          '24 Nov 2017',
          '27 Nov 2017',
          '28 Nov 2017',
          '29 Nov 2017',
          '30 Nov 2017',
          '01 Dec 2017',
          '04 Dec 2017',
          '05 Dec 2017',
          '06 Dec 2017',
          '07 Dec 2017',
          '08 Dec 2017',
        ],
      },
      monthDataSeries2: {
        prices: [
          8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95,
          8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9040.85, 8340.7,
          8165.5, 8122.9, 8107.85, 8128.0,
        ],
        dates: [
          '13 Nov 2017',
          '14 Nov 2017',
          '15 Nov 2017',
          '16 Nov 2017',
          '17 Nov 2017',
          '20 Nov 2017',
          '21 Nov 2017',
          '22 Nov 2017',
          '23 Nov 2017',
          '24 Nov 2017',
          '27 Nov 2017',
          '28 Nov 2017',
          '29 Nov 2017',
          '30 Nov 2017',
          '01 Dec 2017',
          '04 Dec 2017',
          '05 Dec 2017',
          '06 Dec 2017',
          '07 Dec 2017',
          '08 Dec 2017',
        ],
      },
    };
    this.chartOptions = {
      series: [
        {
          name: 'STOCK ABC',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: 'left',
      },
    };
  }
  onCustumDate() {}
}
