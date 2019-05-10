import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Submod12Page } from './submod12.page';

describe('Submod12Page', () => {
  let component: Submod12Page;
  let fixture: ComponentFixture<Submod12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Submod12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Submod12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
