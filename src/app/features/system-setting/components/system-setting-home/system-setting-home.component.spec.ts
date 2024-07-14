import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSettingHomeComponent } from './system-setting-home.component';

describe('SystemSettingHomeComponent', () => {
  let component: SystemSettingHomeComponent;
  let fixture: ComponentFixture<SystemSettingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemSettingHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SystemSettingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
