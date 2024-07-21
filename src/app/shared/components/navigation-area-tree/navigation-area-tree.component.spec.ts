import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAreaTreeComponent } from './navigation-area-tree.component';

describe('NavigationAreaTreeComponent', () => {
  let component: NavigationAreaTreeComponent;
  let fixture: ComponentFixture<NavigationAreaTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationAreaTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationAreaTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
