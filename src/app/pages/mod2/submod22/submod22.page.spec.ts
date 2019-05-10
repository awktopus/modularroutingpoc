import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod22Page } from './submod22.page';

describe('Submod22Page', () => {
  let component: Submod22Page;
  let fixture: ComponentFixture<Submod22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
