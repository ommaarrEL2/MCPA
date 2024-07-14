import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsPanelComponent } from './alarms-panel.component';

describe('AlarmsPanelComponent', () => {
  let component: AlarmsPanelComponent;
  let fixture: ComponentFixture<AlarmsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlarmsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlarmsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
