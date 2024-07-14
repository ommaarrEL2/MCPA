import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalConsumtionComponent } from './total-consumtion.component';

describe('TotalConsumtionComponent', () => {
  let component: TotalConsumtionComponent;
  let fixture: ComponentFixture<TotalConsumtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalConsumtionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalConsumtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
