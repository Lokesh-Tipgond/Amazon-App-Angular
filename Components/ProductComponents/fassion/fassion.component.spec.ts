import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FassionComponent } from './fassion.component';

describe('FassionComponent', () => {
  let component: FassionComponent;
  let fixture: ComponentFixture<FassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FassionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
