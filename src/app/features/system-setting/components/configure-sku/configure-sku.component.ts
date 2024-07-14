import { ConfigSkuService } from './../../services/config-sku.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-configure-sku',
  templateUrl: './configure-sku.component.html',
  styleUrl: './configure-sku.component.scss',
})
export class ConfigureSkuComponent {
  displayModal: boolean = false;

  constructor(private _ConfigSkuService: ConfigSkuService) {}
}
