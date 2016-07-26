import { provideRouter, RouterConfig } from '@angular/router';
import {SearchAddressComponent, NewAddressComponent} from "./app.components";

const routes: RouterConfig = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: SearchAddressComponent },
    { path: 'new', component: NewAddressComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];
