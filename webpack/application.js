require("application.css")
require("bootstrap/dist/css/bootstrap.css")
var coreJS = require('core-js')
var zoneJS = require('zone.js')
var reflectMetadata = require('reflect-metadata')
var ng = {
  core: require("@angular/core"),
  common: require("@angular/common"),
  compiler: require("@angular/compiler"),
  forms: require("@angular/forms"),
  platformBrowser: require("@angular/platform-browser"),
  platformBrowserDynamic: require("@angular/platform-browser-dynamic"),
  router: require("@angular/router")
}

var CustomerSearchComponent = ng.core.Component({
  selector: 'shine-customer-search',
  template: '\
<header> \
  <h1 class="h2">Customer Search</h1> \
</header> \
<section class="search-form mb-5"> \
  <div class="input-group input-group-lg"> \
    <label for="keywords" class="sr-only">Keywords</label> \
    <input type="text" id="keywords" name="keywords" \
           placeholder="First Name, Last Name or Email" class="form-control input-lg" bindon-ngModel="keywords"> \
    <span class="input-group-btn"> \
      <input type="submit" class="btn btn-primary btn-lg" value="Find Customers" on-click="search()"> \
    </span> \
  </div> \
</section> \
<section class="search-result"> \
  <header> \
    <h1 class="h3">Results</h1> \
  </header> \
  <ol class="list-group"> \
    <li class="list-group-item clearfix"> \
      <h3 class="pull-right"> \
        <small class="text-uppercase">Joined</small>  \
        2020-01-08</h3> \
      <h2 class="h3"> \
        Jaw Smith \
        <small>jaw.smith</small> \
      </h2> \
      <h4>jaw.drop@mail.com</h4> \
    </li> \
  </ol> \
</section> \
  '
}).Class({
  constructor: function() {
    this.keywords = null
  },
  search: function() {
    alert('Searched for: ' + this.keywords)
  }
})

var AngularTestComponent = ng.core.Component({
  selector: 'shine-angular-test',
  template: '\
  <h2 *ngIf="name"> Hello {{name}}!</h2> \
  <form> \
    <div class="form-group"> \
      <label for="name">Name</label> \
      <input type="text" id="name" class="form-control" \
             name="name" bindon-ngModel="name"> \
    </div> \
  </form> \
  '
}).Class({
  constructor: function() {
    this.name = null
  }
})

var CustomerSearchAppModule = ng.core.NgModule({
  imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
  declarations: [ CustomerSearchComponent ],
  bootstrap: [ CustomerSearchComponent ]
}).Class({
  constructor: function() {}
})

var AngularTestAppModule = ng.core.NgModule({
  imports: [ ng.platformBrowser.BrowserModule, ng.forms.FormsModule ],
  declarations: [ AngularTestComponent ],
  bootstrap: [ AngularTestComponent ]
}).Class({
  constructor: function() {}
})

document.addEventListener('DOMContentLoaded', function(){
  var shouldBootstrap = document.getElementById('shine-customer-search')
  if (shouldBootstrap) {
    ng.platformBrowserDynamic.
      platformBrowserDynamic().
      bootstrapModule(CustomerSearchAppModule)
  }
})
