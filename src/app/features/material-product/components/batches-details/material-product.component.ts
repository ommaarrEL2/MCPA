import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BatchesDetailsService } from '../../services/batches-details.service';

@Component({
  selector: 'app-material-product',
  templateUrl: './material-product.component.html',
  styleUrl: './material-product.component.scss',
})
export class MaterialProductComponent {
  factoryTree!: any[];
  selectedFile: any;
  constructor(
    private router: Router,
    private batchesDetailsService: BatchesDetailsService
  ) {}
  ngOnInit(): void {
    this.batchesDetailsService.getFactoriesTree().subscribe({
      next: (data: any) => {
        console.log(this.factoryTree);
        this.factoryTree = data;
      },
    });
  }
  nodeSelect(event: any) {}

  nodeUnselect(event: any) {}
}
