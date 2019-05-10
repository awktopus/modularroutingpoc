import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2Page } from './mod2.page';

describe('Mod2Page', () => {
  let component: Mod2Page;
  let fixture: ComponentFixture<Mod2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
