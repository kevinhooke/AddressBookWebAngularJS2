"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AddressBookComponent = (function () {
    function AddressBookComponent() {
    }
    AddressBookComponent = __decorate([
        core_1.Component({
            selector: 'AddressBook',
            template: "<nav class=\"navbar navbar-default\" role=\"navigation\">\n    \t<div class=\"navbar-header\">\n    \t\t<a class=\"navbar-brand\" href=\"#/\">AddressBook</a>\n    \t</div>\n    \n    \t<!-- Collect the nav links, forms, and other content for toggling -->\n    \t<div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n    \t\t<ul class=\"nav navbar-nav\">\n    \t\t\t<li routerLinkActive=\"active\"><a routerLink=\"\">Search</a></li>\n    \t\t\t<li routerLinkActive=\"active\"><a routerLink=\"new\">New</a></li>\n    \t\t</ul>\n    \t</div>\n    </nav>\n    \n    <router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AddressBookComponent);
    return AddressBookComponent;
}());
exports.AddressBookComponent = AddressBookComponent;
var SearchAddressComponent = (function () {
    function SearchAddressComponent() {
    }
    SearchAddressComponent = __decorate([
        core_1.Component({
            selector: 'Search',
            template: "<form class=\"form-inline\">\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last name:</label>\n            <input id=\"lastName\" type=\"text\">\n        </div>\n    </form>"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchAddressComponent);
    return SearchAddressComponent;
}());
exports.SearchAddressComponent = SearchAddressComponent;
var NewAddressComponent = (function () {
    function NewAddressComponent() {
    }
    NewAddressComponent = __decorate([
        core_1.Component({
            selector: 'NewAddress',
            template: "<p>Add new Address</p>\n<form class=\"form-horizontal\">\n\n    <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\" for=\"firstName\">First name:</label>\n        <div class=\"col-lg-3\">\n            <input class=\"form-control\" id=\"firstName\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\" for=\"lastName\">Last name:</label>\n        <div class=\"col-lg-3\">\n            <input class=\"form-control\" id=\"lastName\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\" for=\"addr1\">Address 1:</label>\n        <div class=\"col-lg-3\">\n            <input class=\"form-control\" id=\"addr1\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\" for=\"city\">City:</label>\n        <div class=\"col-lg-3\">\n            <input class=\"form-control\" id=\"city\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-lg-2 control-label\" for=\"zip\">Zip:</label>\n        <div class=\"col-lg-3\">\n            <input class=\"form-control\" id=\"zip\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"col-lg-offset-2 col-lg-10\">\n            <button class=\"btn btn-default\">Save</button>\n        </div>\n    </div>\n</form>"
        }), 
        __metadata('design:paramtypes', [])
    ], NewAddressComponent);
    return NewAddressComponent;
}());
exports.NewAddressComponent = NewAddressComponent;
//# sourceMappingURL=app.components.js.map