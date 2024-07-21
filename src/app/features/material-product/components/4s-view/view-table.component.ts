import { Component } from '@angular/core';
import { RdiService } from '../../services/rdi.service';

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrl: './view-table.component.scss',
})
export class ViewTableComponent {
  fourSDate: Date = new Date();
  PreProcessQuarantine!: any[];
  setOfProcesses!: any[];
  finishedProductStore!: any[];
  postQuarantineStore!: any[];
  constructor(private rdiService: RdiService) {}

  ngOnInit(): void {
    this.getRdiDate(this.fourSDate.toLocaleString());
  }

  getRdiDate(date: string) {
    this.rdiService.getFourS(date).subscribe({
      next: (data: any) => {
        this.PreProcessQuarantine = data.preQ;
        this.setOfProcesses = data.processed;
        this.finishedProductStore = data.finished;
        this.postQuarantineStore = data.postQ;
      },
    });
  }

  changeDate(ee: any) {
    this.getRdiDate(ee.toLocaleString());
  }
}
