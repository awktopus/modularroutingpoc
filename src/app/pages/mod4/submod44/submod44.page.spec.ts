import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod44Page } from './submod44.page';

describe('Submod44Page', () => {
  let component: Submod44Page;
  let fixture: ComponentFixture<Submod44Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod44Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod44Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
