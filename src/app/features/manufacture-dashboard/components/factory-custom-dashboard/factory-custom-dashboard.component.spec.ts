import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryCustomDashboardComponent } from './factory-custom-dashboard.component';

describe('FactoryCustomDashboardComponent', () => {
  let component: FactoryCustomDashboardComponent;
  let fixture: ComponentFixture<FactoryCustomDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoryCustomDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactoryCustomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
