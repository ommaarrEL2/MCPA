import { Component } from '@angular/core';
import { radialBarChartFunc } from '../../../core/chartModel/apex';
import { barChart } from '../../../core/chartModel/HChart';

@Component({
  selector: 'app-sle',
  templateUrl: './sle.component.html',
  styleUrl: './sle.component.scss',
})
export class SleComponent {
  radialchartOptions1: any;

  constructor() {}

  ngOnInit(): void {
    this.radialchartOptions1 = radialBarChartFunc({
      name: 'SLE',
      series: 55,
      symbole: ' % ',
    });
    barChart('chart-line3', 'SLE', 38500, 55000);
  }
}
