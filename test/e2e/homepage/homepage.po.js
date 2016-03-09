'use strict';

var HomePage = function () {

  this.txtFirstName = element(by.id('inputFirstName'));
  this.txtLastName = element(by.id('inputLastName'));
  this.txtInputEmail = element(by.id('inputEmail'));
  this.btnContinue = element(by.cssContainingText('.action-btn', 'Continue'));

};

module.exports = HomePage;
