import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegionPage } from './by-region-page';

describe('ByRegionPage', () => {
  let component: ByRegionPage;
  let fixture: ComponentFixture<ByRegionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByRegionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByRegionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
