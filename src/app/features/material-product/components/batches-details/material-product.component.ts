import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BatchesDetailsService } from '../../services/batches-details.service';
import { activeBatches, scaleStatus } from '../../models/material-product-dtos';

@Component({
  selector: 'app-material-product',
  templateUrl: './material-product.component.html',
  styleUrl: './material-product.component.scss',
})
export class MaterialProductComponent {
  factoryTree!: any[];
  selectedFile: any;
  activeBatchesList!: activeBatches[];
  batches!: activeBatches[];
  scaleStatusList!: scaleStatus[];
  batchCode!: string;

  constructor(
    private router: Router,
    private batchesDetailsService: BatchesDetailsService
  ) {}

  ngOnInit(): void {
    this.getFactoriesTree();
    this.getMaterialDashBoard(2, 1);
  }

  getFactoriesTree() {
    this.batchesDetailsService.getFactoriesTree().subscribe({
      next: (data: any) => {
        console.log(this.factoryTree);
        this.factoryTree = data;
      },
    });
  }

  getMaterialDashBoard(id: number, per: number) {
    this.batchesDetailsService.getMaterialDashboardData(id, per).subscribe({
      next: (data: any) => {
        this.activeBatchesList = data.activeBatches;
        this.scaleStatusList = data.scaleStatus;
      },
    });
  }

  searchForBatchByBatchCode(batchCode: string) {
    this.batchesDetailsService.searchForBatchByBatchCode(batchCode).subscribe({
      next: (data: any) => {
        this.batches = data;
      },
    });
  }

  nodeSelect(event: any) {
    const id: number = event.node.id;
    let per: number;
    if (event.node.key.includes('-')) {
      per = 1;
    } else {
      per = 0;
    }
    this.getMaterialDashBoard(id, per);
  }

  nodeUnselect(event: any) {}
}
