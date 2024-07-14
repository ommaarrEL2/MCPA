import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureResourceComponent } from './configure-resource.component';

describe('ConfigureResourceComponent', () => {
  let component: ConfigureResourceComponent;
  let fixture: ComponentFixture<ConfigureResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
