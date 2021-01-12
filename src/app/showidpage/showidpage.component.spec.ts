import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowidpageComponent } from './showidpage.component';

describe('ShowidpageComponent', () => {
  let component: ShowidpageComponent;
  let fixture: ComponentFixture<ShowidpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowidpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowidpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
