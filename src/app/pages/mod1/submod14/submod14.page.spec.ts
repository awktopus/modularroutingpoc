import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod14Page } from './submod14.page';

describe('Submod14Page', () => {
  let component: Submod14Page;
  let fixture: ComponentFixture<Submod14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
