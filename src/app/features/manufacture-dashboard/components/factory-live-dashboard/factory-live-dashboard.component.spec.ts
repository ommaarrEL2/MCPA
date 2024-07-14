import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryLiveDashboardComponent } from './factory-live-dashboard.component';

describe('FactoryLiveDashboardComponent', () => {
  let component: FactoryLiveDashboardComponent;
  let fixture: ComponentFixture<FactoryLiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoryLiveDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactoryLiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
