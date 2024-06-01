import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeventsComponent } from './clubevents.component';

describe('ClubeventsComponent', () => {
  let component: ClubeventsComponent;
  let fixture: ComponentFixture<ClubeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClubeventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClubeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
