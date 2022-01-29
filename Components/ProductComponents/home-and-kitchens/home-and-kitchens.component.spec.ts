import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndKitchensComponent } from './home-and-kitchens.component';

describe('HomeAndKitchensComponent', () => {
  let component: HomeAndKitchensComponent;
  let fixture: ComponentFixture<HomeAndKitchensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAndKitchensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndKitchensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
