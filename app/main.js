"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_components_1 = require('./app.components');
var app_components_2 = require('./app.components');
var app_components_3 = require('./app.components');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_components_1.AddressBookComponent, [
    app_routes_1.appRouterProviders
]).catch(function (err) { return console.error(err); });
platform_browser_dynamic_1.bootstrap(app_components_2.SearchAddressComponent);
platform_browser_dynamic_1.bootstrap(app_components_3.NewAddressComponent);
//# sourceMappingURL=main.js.map