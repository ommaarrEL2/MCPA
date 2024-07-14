import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoriesTreeComponent } from './factories-tree.component';

describe('FactoriesTreeComponent', () => {
  let component: FactoriesTreeComponent;
  let fixture: ComponentFixture<FactoriesTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FactoriesTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FactoriesTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
