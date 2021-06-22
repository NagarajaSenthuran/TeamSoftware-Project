import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubscribeComponent } from './view-subscribe.component';

describe('ViewSubscribeComponent', () => {
  let component: ViewSubscribeComponent;
  let fixture: ComponentFixture<ViewSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSubscribeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
