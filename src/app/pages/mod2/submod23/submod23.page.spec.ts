import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod23Page } from './submod23.page';

describe('Submod23Page', () => {
  let component: Submod23Page;
  let fixture: ComponentFixture<Submod23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod23Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
