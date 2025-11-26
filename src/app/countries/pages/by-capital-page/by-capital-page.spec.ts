import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByCapitalPage } from './by-capital-page';

describe('ByCapitalPage', () => {
  let component: ByCapitalPage;
  let fixture: ComponentFixture<ByCapitalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByCapitalPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByCapitalPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
