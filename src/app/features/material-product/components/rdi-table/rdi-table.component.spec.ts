import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdiTableComponent } from './rdi-table.component';

describe('RdiTableComponent', () => {
  let component: RdiTableComponent;
  let fixture: ComponentFixture<RdiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdiTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RdiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
