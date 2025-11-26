import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CountryService } from '../../services/countries';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private countriesService = inject(CountryService);

  country = toSignal(
    this.activatedRoute.params.pipe(
      switchMap(({ code }) =>
        this.countriesService.searchCountryByAlphaCode(code)
      )
    ),
    { initialValue: undefined }
  );

  constructor() {
    effect(() => {
      // 1. Leemos el valor actual de la señal
      const countryResult = this.country();

      // 2. Validación:
      // - undefined: Aún cargando (estado inicial) -> No hacemos nada
      // - null: La API respondió que NO existe -> Redirigimos
      if (countryResult === null) {
        console.log('País no encontrado, redirigiendo...');
        this.router.navigateByUrl('');
      }
    });
  }

}
