"use strict";
var router_1 = require('@angular/router');
var app_components_1 = require("./app.components");
var routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: app_components_1.SearchAddressComponent },
    { path: 'new', component: app_components_1.NewAddressComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map