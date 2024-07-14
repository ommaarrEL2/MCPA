import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCustomDashboardComponent } from './line-custom-dashboard.component';

describe('LineCustomDashboardComponent', () => {
  let component: LineCustomDashboardComponent;
  let fixture: ComponentFixture<LineCustomDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineCustomDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LineCustomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
