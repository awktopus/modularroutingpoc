import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod34Page } from './submod34.page';

describe('Submod34Page', () => {
  let component: Submod34Page;
  let fixture: ComponentFixture<Submod34Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod34Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod34Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
