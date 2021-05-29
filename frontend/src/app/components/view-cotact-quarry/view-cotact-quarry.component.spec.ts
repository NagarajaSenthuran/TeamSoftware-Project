import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCotactQuarryComponent } from './view-cotact-quarry.component';

describe('ViewCotactQuarryComponent', () => {
  let component: ViewCotactQuarryComponent;
  let fixture: ComponentFixture<ViewCotactQuarryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCotactQuarryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCotactQuarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
