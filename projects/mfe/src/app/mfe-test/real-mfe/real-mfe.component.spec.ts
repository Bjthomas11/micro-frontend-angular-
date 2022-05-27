import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealMfeComponent } from './real-mfe.component';

describe('RealMfeComponent', () => {
  let component: RealMfeComponent;
  let fixture: ComponentFixture<RealMfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealMfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
