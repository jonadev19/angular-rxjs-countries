import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPage } from './country-page';

describe('CountryPage', () => {
  let component: CountryPage;
  let fixture: ComponentFixture<CountryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
