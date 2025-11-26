import { Component, Input, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Country } from '../../interfaces/country.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-table',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-table.html',
  styleUrl: './country-table.css',
})
export class CountryTable {
  @Input({ required: true }) countries: Country[] = [];


}
