import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod13Page } from './submod13.page';

describe('Submod13Page', () => {
  let component: Submod13Page;
  let fixture: ComponentFixture<Submod13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
