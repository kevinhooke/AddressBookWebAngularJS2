import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AddressBookComponent } from './app.components';
import { SearchAddressComponent } from './app.components';
import { NewAddressComponent } from './app.components';
import { appRouterProviders } from './app.routes';


bootstrap(AddressBookComponent, [
    appRouterProviders
]).catch(err => console.error(err));

bootstrap(SearchAddressComponent);
bootstrap(NewAddressComponent);