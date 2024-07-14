import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSystemSettingsComponent } from './configure-system-settings.component';

describe('ConfigureSystemSettingsComponent', () => {
  let component: ConfigureSystemSettingsComponent;
  let fixture: ComponentFixture<ConfigureSystemSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureSystemSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureSystemSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
