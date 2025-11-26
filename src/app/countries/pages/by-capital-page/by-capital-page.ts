import { Component, inject, signal } from '@angular/core';
import { CountryService } from '../../services/countries';
import { Country } from '../../interfaces/country.interface';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box";
import { CountryTable } from "../../components/country-table/country-table";

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchBoxComponent, CountryTable],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {
  countries = signal<Country[]>([]);

  private readonly countryService = inject(CountryService)


  searchByCapital(term: string) {
    this.countryService.searchCapital(term)
      .subscribe(countries => {
        this.countries.set(countries)
      });

  }
}
