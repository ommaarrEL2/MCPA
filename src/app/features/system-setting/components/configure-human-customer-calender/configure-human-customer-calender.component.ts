import { Component } from '@angular/core';

@Component({
  selector: 'app-configure-human-customer-calender',
  templateUrl: './configure-human-customer-calender.component.html',
  styleUrl: './configure-human-customer-calender.component.scss',
})
export class ConfigureHumanCustomerCalenderComponent {
  date14!: Date;
  displayModal: boolean = false;
}
