import { Component } from '@angular/core';

@Component({
  selector: 'app-line-dashboard',
  templateUrl: './line-dashboard.component.html',
  styleUrl: './line-dashboard.component.scss',
})
export class LineDashboardComponent {
  selectedTime: number = 0;
  selectedRangeDate!: Date[];

  constructor() {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  onCustumDate() {}
}
