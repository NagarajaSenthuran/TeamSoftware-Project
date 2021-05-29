import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewvehicleComponent } from './add-newvehicle.component';

describe('AddNewvehicleComponent', () => {
  let component: AddNewvehicleComponent;
  let fixture: ComponentFixture<AddNewvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewvehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
