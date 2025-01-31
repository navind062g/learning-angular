import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersComponent } from './supers.component';

describe('SupersComponent', () => {
  let component: SupersComponent;
  let fixture: ComponentFixture<SupersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
