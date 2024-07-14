import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureOrganizationComponent } from './configure-organization.component';

describe('ConfigureOrganizationComponent', () => {
  let component: ConfigureOrganizationComponent;
  let fixture: ComponentFixture<ConfigureOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
