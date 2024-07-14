import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdiViewComponent } from './rdi-view.component';

describe('RdiViewComponent', () => {
  let component: RdiViewComponent;
  let fixture: ComponentFixture<RdiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdiViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RdiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
