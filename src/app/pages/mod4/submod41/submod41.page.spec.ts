import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod41Page } from './submod41.page';

describe('Submod41Page', () => {
  let component: Submod41Page;
  let fixture: ComponentFixture<Submod41Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod41Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
