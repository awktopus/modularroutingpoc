import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1Page } from './mod1.page';

describe('Mod1Page', () => {
  let component: Mod1Page;
  let fixture: ComponentFixture<Mod1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
