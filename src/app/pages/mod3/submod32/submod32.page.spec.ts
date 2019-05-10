import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod32Page } from './submod32.page';

describe('Submod32Page', () => {
  let component: Submod32Page;
  let fixture: ComponentFixture<Submod32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
