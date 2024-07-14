import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureHumanCapitalComponent } from './configure-human-capital.component';

describe('ConfigureHumanCapitalComponent', () => {
  let component: ConfigureHumanCapitalComponent;
  let fixture: ComponentFixture<ConfigureHumanCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureHumanCapitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureHumanCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
