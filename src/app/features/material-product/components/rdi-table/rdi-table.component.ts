import { Component } from '@angular/core';
import { RdiService } from '../../services/rdi.service';
import { RdiDto } from '../../models/rdi-dto';

@Component({
  selector: 'app-rdi-table',
  templateUrl: './rdi-table.component.html',
  styleUrl: './rdi-table.component.scss',
})
export class RdiTableComponent {
  rdiDate: Date = new Date();
  plannedSkus!: RdiDto[];
  releasedSKUs!: RdiDto[];
  intraLogistic!: RdiDto[];
  dispensedSKUBatch!: RdiDto[];
  constructor(private rdiService: RdiService) {}

  ngOnInit(): void {
    this.getRdiDate(this.rdiDate.toLocaleString());
  }

  getRdiDate(date: string) {
    this.rdiService.getRdiData(date).subscribe({
      next: (data: any) => {
        this.plannedSkus = data.plannedSkus;
        this.releasedSKUs = data.releasedMaterials;
        this.intraLogistic = data.intraLogistickMaterials;
        this.dispensedSKUBatch = data.dispensedMaterials;
      },
    });
  }

  changeDate(ee: any) {
    this.getRdiDate(ee.toLocaleString());
  }
}
