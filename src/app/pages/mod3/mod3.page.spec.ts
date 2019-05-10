import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3Page } from './mod3.page';

describe('Mod3Page', () => {
  let component: Mod3Page;
  let fixture: ComponentFixture<Mod3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
