import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTable } from './country-table';

describe('CountryTable', () => {
  let component: CountryTable;
  let fixture: ComponentFixture<CountryTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
