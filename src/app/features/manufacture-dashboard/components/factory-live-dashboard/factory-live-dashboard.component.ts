import { Component } from '@angular/core';
import { SelectList } from '../../../../core/models/select-list';

@Component({
  selector: 'app-factory-live-dashboard',
  templateUrl: './factory-live-dashboard.component.html',
  styleUrl: './factory-live-dashboard.component.scss',
})
export class FactoryLiveDashboardComponent {
  rangeDates!: Date[];
  machineStatus: any[] = [];
  displayModal: boolean = false;
  DrilDownChart: string = 'DrilDownChart';
  tableValues: any[] = [];
  factoryList: SelectList[] = [
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
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
