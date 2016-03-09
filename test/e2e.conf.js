'use strict';

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// *** Check out the reference config file at: https://github.com/angular/protractor/blob/master/docs/referenceConf.js
exports.config = {
  directConnect : true,

  // Capabilities to be passed to the webdriver instance.
  capabilities : {
    'browserName' : 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework : 'jasmine',

  // Spec patterns are relative to the location of this config.
  //specs : ['e2e/**/*.js'],

  suites : {
    homepage     : 'e2e/homepage/homepage.spec.js'
    // customerpage : ['e2e/customerpage/customerpage.spec.js'],
    //questionnairepage : ['e2e/questionnairepage/questionnairepage.spec.js']
  },

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be resolved against this URL (via url.resolve)
  baseUrl : 'https://ck-discovery-test.azurewebsites.net',

  // A callback function called once protractor is ready and available, and
  // before the specs are executed.
  // If multiple capabilities are being run, this will run once per
  // capability.
  // You can specify a file containing code to run by setting onPrepare to
  // the filename string.
  // onPrepare can optionally return a promise, which Protractor will wait for
  // before continuing execution. This can be used if the preparation involves
  // any asynchronous calls, e.g. interacting with the browser. Otherwise
  // Protractor cannot guarantee order of execution and may start the tests
  // before preparation finishes.
  onPrepare : function () {
    // At this point, global variable 'protractor' object will be set up, and
    // globals from the test framework will be available. For example, if you
    // are using Jasmine, you can add a reporter with:
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter());
    //
    // If you need access back to the current configuration object,
    // use a pattern like the following:
    //     return browser.getProcessedConfig().then(function(config) {
    //       // config.capabilities is the CURRENT capability being run, if
    //       // you are using multiCapabilities.
    //       console.log('Executing capability', config.capabilities);
    //     });

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath          : './test/e2e_reports/',
      screenshotsFolder : 'images',
      takeScreenshots   : true,
      consolidate       : true,
      consolidateAll    : true
    }));
  },

  // Options to be passed to jasmine.
  //
  // See https://github.com/jasmine/jasmine-npm/blob/master/lib/jasmine.js
  // for the exact options available.
  jasmineNodeOpts : {
    // If true, print colors to the terminal.
    showColors             : true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval : 30000,
    // Function called to print jasmine results.
    print                  : function () { }
  },

  params: {
        testdataFilePath: './test/testdata/data.csv',
        jsonTestData : ''
    }
};
