import { Component, ViewChild } from '@angular/core';
import { SelectList } from '../../../../core/models/select-list';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
} from 'ng-apexcharts';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DrilDownChartModelRefactor } from '../../../../core/chartModel/HChart';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-factories-overview',
  templateUrl: './factories-overview.component.html',
  styleUrls: ['./factories-overview.component.scss'], // Ensure 'styleUrls' is used instead of 'styleUrl'
})
export class FactoriesOverviewComponent {
  @ViewChild('chart') chart: any;
  selectedFile: any;
  chartOptions: any;
  machineForm!: FormGroup;
  rangeDates!: Date[];
  displayModal: boolean = false;
  DrilDownChart: string = 'DrilDownChart';
  parts: any[] = [];
  machineStatus: any[] = [];
  energyConsumption: any[] = [];
  waterConsumption: any[] = [];
  factories: SelectList[] = [
    {
      id: 0,
      name: 'factory 1',
    },
    {
      id: 1,
      name: 'factory 2',
    },
    {
      id: 2,
      name: 'factory 3',
    },
  ];

  cols = [
    { field: 'product', header: 'Product' },
    { field: 'weight', header: 'Weight' },
    { field: 'volume', header: 'Volume' },
    { field: 'SKU', header: 'SKU' },
    { field: 'Batch No.', header: 'Batch No.' },
    { field: 'Date', header: 'Date' },
  ];

  constructor(private router: Router) {
    this.chartOptions = {
      series: [
        {
          name: 'Series Blue',
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: 'Series Green',
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: 'Series Orange',
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      title: {
        text: 'SLE',
      },
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.4,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
      },
    };
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class if required.
    const data = [
      {
        name: 'Alexandria',
        y: 58,
        drilldown: 'Alex',
      },
      {
        name: 'Qalyub',
        y: 278,
        drilldown: 'Qlyb',
      },
      {
        name: 'Sadat',
        y: 180,
        drilldown: 'Sdat',
      },
      {
        name: 'Tanta',
        y: 23,
        drilldown: 'Tnta',
      },
    ];
    const dataLine = [
      {
        name: 'Alexandria',
        id: 'Alex',
        data: [
          ['2', 0],
          ['3', 11],
          ['4', 24],
          ['5', 23],
        ],
      },
      {
        name: 'Qalyub',
        id: 'Qlyb',
        data: [
          ['1', 7],
          ['2', 38],
          ['3', 221],
          ['4', 0],
          ['5', 12],
        ],
      },
      {
        name: 'Sadat',
        id: 'Sdat',
        data: [
          ['2', 32],
          ['5', 148],
        ],
      },
      {
        name: 'Tanta',
        id: 'Tnta',
        data: [
          ['2', 0],
          ['4', 23],
        ],
      },
    ];
    DrilDownChartModelRefactor(this.DrilDownChart, '', data, dataLine);
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
}
