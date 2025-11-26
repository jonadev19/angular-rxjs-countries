import { Routes } from '@angular/router';
import { HomePage } from './shared/pages/home-page';
import { ByCapitalPage } from './countries/pages/by-capital-page/by-capital-page';
import { CountryPage } from './countries/pages/country-page/country-page';

export const routes: Routes = [
    { path: 'by-capital', component: ByCapitalPage },
    { path: 'by', children: [{ path: ':code', component: CountryPage }] },
    { path: '**', redirectTo: 'by-capital' }
];
