import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureStoppageCatalogComponent } from './configure-stoppage-catalog.component';

describe('ConfigureStoppageCatalogComponent', () => {
  let component: ConfigureStoppageCatalogComponent;
  let fixture: ComponentFixture<ConfigureStoppageCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigureStoppageCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigureStoppageCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
