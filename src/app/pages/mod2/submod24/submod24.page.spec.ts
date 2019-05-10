import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod24Page } from './submod24.page';

describe('Submod24Page', () => {
  let component: Submod24Page;
  let fixture: ComponentFixture<Submod24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod24Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
