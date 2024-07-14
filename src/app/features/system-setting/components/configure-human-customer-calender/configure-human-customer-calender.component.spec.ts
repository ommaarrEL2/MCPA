import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureHumanCustomerCalenderComponent } from './configure-human-customer-calender.component';

describe('ConfigureHumanCustomerCalenderComponent', () => {
  let component: ConfigureHumanCustomerCalenderComponent;
  let fixture: ComponentFixture<ConfigureHumanCustomerCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureHumanCustomerCalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureHumanCustomerCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
