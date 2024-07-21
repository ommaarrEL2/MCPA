import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignageStreamerComponent } from './signage-streamer.component';

describe('SignageStreamerComponent', () => {
  let component: SignageStreamerComponent;
  let fixture: ComponentFixture<SignageStreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignageStreamerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignageStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
