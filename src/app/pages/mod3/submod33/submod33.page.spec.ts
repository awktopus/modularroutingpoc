import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod33Page } from './submod33.page';

describe('Submod33Page', () => {
  let component: Submod33Page;
  let fixture: ComponentFixture<Submod33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod33Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
