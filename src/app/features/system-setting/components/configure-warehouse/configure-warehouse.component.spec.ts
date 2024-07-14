import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureWarehouseComponent } from './configure-warehouse.component';

describe('ConfigureWarehouseComponent', () => {
  let component: ConfigureWarehouseComponent;
  let fixture: ComponentFixture<ConfigureWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureWarehouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
