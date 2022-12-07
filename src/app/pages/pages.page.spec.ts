import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPage } from './pages.page';

describe('TabsPage', () => {
  let component: PagesPage;
  let fixture: ComponentFixture<PagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
