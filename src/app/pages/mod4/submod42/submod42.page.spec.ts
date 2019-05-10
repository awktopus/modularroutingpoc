import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod42Page } from './submod42.page';

describe('Submod42Page', () => {
  let component: Submod42Page;
  let fixture: ComponentFixture<Submod42Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod42Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
