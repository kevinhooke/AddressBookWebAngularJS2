import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'AddressBook',
    template: `<nav class="navbar navbar-default" role="navigation">
    	<div class="navbar-header">
    		<a class="navbar-brand" href="#/">AddressBook</a>
    	</div>
    
    	<!-- Collect the nav links, forms, and other content for toggling -->
    	<div class="collapse navbar-collapse navbar-ex1-collapse">
    		<ul class="nav navbar-nav">
    			<li routerLinkActive="active"><a routerLink="">Search</a></li>
    			<li routerLinkActive="active"><a routerLink="new">New</a></li>
    		</ul>
    	</div>
    </nav>
    
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
export class AddressBookComponent { }


@Component({
    selector: 'Search',
    template: `<form class="form-inline">
        <div class="form-group">
            <label for="lastName">Last name:</label>
            <input id="lastName" type="text">
        </div>
    </form>`
})
export class SearchAddressComponent {}


@Component({
    selector: 'NewAddress',
    template: `<p>Add new Address</p>
<form class="form-horizontal">

    <div class="form-group">
        <label class="col-lg-2 control-label" for="firstName">First name:</label>
        <div class="col-lg-3">
            <input class="form-control" id="firstName" type="text">
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-2 control-label" for="lastName">Last name:</label>
        <div class="col-lg-3">
            <input class="form-control" id="lastName" type="text">
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-2 control-label" for="addr1">Address 1:</label>
        <div class="col-lg-3">
            <input class="form-control" id="addr1" type="text">
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-2 control-label" for="city">City:</label>
        <div class="col-lg-3">
            <input class="form-control" id="city" type="text">
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-2 control-label" for="zip">Zip:</label>
        <div class="col-lg-3">
            <input class="form-control" id="zip" type="text">
        </div>
    </div>
    <div class="form-group">
        <div class="col-lg-offset-2 col-lg-10">
            <button class="btn btn-default">Save</button>
        </div>
    </div>
</form>`
})
export class NewAddressComponent {}
