'use strict';

var WrapperMethods = function () {

  //To open the URL
  this.get = function () {
    // NOTE:               *** DO NOT USE DEPLOYED LOCATION TO TEST ***
    // NOTE: Please use relative urls, the `baseUrl` property on 'test/e2e.conf.js' file prepends the locally running site's URL
    // browser.get('https://ck-discovery-web.azurewebsites.net/#!/');
    browser.get('/#!/');
  };

  //To Maximize the browser window
  this.maximize = function () {
    browser.driver.manage().window().maximize();
  };

};

module.exports = WrapperMethods;
