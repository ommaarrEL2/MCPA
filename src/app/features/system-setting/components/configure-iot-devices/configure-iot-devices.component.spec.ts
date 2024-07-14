import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureIotDevicesComponent } from './configure-iot-devices.component';

describe('ConfigureIotDevicesComponent', () => {
  let component: ConfigureIotDevicesComponent;
  let fixture: ComponentFixture<ConfigureIotDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureIotDevicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureIotDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
