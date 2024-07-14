import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSkuComponent } from './configure-sku.component';

describe('ConfigureSkuComponent', () => {
  let component: ConfigureSkuComponent;
  let fixture: ComponentFixture<ConfigureSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureSkuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
