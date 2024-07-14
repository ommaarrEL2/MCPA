import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoriesOverviewComponent } from './factories-overview.component';

describe('FactoriesOverviewComponent', () => {
  let component: FactoriesOverviewComponent;
  let fixture: ComponentFixture<FactoriesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoriesOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactoriesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
