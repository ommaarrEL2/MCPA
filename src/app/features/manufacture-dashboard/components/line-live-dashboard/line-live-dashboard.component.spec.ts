import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLiveDashboardComponent } from './line-live-dashboard.component';

describe('LineLiveDashboardComponent', () => {
  let component: LineLiveDashboardComponent;
  let fixture: ComponentFixture<LineLiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineLiveDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineLiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
