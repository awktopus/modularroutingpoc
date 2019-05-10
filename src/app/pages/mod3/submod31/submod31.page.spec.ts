import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod31Page } from './submod31.page';

describe('Submod31Page', () => {
  let component: Submod31Page;
  let fixture: ComponentFixture<Submod31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod31Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
