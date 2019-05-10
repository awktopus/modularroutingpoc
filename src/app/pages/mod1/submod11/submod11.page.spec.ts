import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod11Page } from './submod11.page';

describe('Submod11Page', () => {
  let component: Submod11Page;
  let fixture: ComponentFixture<Submod11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
