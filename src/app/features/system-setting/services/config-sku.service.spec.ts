/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfigSkuService } from './config-sku.service';

describe('Service: ConfigSku', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigSkuService]
    });
  });

  it('should ...', inject([ConfigSkuService], (service: ConfigSkuService) => {
    expect(service).toBeTruthy();
  }));
});
