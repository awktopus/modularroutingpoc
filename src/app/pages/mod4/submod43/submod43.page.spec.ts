import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod43Page } from './submod43.page';

describe('Submod43Page', () => {
  let component: Submod43Page;
  let fixture: ComponentFixture<Submod43Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod43Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
