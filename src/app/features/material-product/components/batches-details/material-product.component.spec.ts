import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialProductComponent } from './material-product.component';

describe('MaterialProductComponent', () => {
  let component: MaterialProductComponent;
  let fixture: ComponentFixture<MaterialProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
