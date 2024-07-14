import { Component } from '@angular/core';
import { SelectList } from '../../../../core/models/select-list';
import { createlineChart } from '../../../../core/chartModel/HChart';

@Component({
  selector: 'app-factory-custom-dashboard',
  templateUrl: './factory-custom-dashboard.component.html',
  styleUrl: './factory-custom-dashboard.component.scss',
})
export class FactoryCustomDashboardComponent {
  selectedFactory: any;
  factoryList!: SelectList[];
  displayModal: boolean = false;
  rangeDates!: Date[];
  skuStatus: any;

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const data = [
      ['8:00', 3660],
      ['9:00', 4240],
      ['10:00', 2000],
      ['11:00', 0],
      ['12:00', 1200],
      ['13:00', 340],
      ['14:00', 0],
      ['15:00', 0],
      ['16:00', 0],
      ['17:00', 0],
      ['18:00', 0],
      ['19:00', 0],
      ['20:00', 0],
      ['21:00', 0],
      ['22:00', 0],
      ['23:00', 0],
      ['0:00', 0],
      ['1:00', 0],
      ['2:00', 0],
      ['3:00', 0],
      ['4:00', 0],
      ['5:00', 0],
      ['6:00', 0],
      ['7:00', 0],
    ];
    createlineChart(data, 'column', 'productionPerLineChart', '');
    createlineChart(data, 'column', 'sleDrilDownChart', '');
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
