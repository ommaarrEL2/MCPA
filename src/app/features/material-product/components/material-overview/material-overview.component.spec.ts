import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOverviewComponent } from './material-overview.component';

describe('MaterialOverviewComponent', () => {
  let component: MaterialOverviewComponent;
  let fixture: ComponentFixture<MaterialOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
