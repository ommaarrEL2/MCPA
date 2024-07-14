import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleComponent } from './sle.component';

describe('SleComponent', () => {
  let component: SleComponent;
  let fixture: ComponentFixture<SleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
