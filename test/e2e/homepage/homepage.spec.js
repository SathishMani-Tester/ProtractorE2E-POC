'use strict';

var HomePage = require('./homepage.po.js');
var WrapperMethods = require('../helper/WrapperMethods.js');

//Test Script for HomePage

describe('Home Page Tests', function () {

  var homePage = new HomePage();
  var wrapperMethods = new WrapperMethods();
  
  
  wrapperMethods.get();
  wrapperMethods.maximize();

  //Validating the URL is accessible or not
  it('Should be accessible', function () {

    expect(homePage.btnContinue.isPresent()).toBe(true);

  });

  //validating whether it is moving to customer page or not
  it('Should be able to navigate to QuestionnairePage', function () {

    homePage.btnContinue.click();
    expect(homePage.btnContinue.isPresent()).toBe(false);
  });

});
