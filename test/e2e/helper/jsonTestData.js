'use strict';

//Using csvtojson plugin to parse csv into JSON format

var fs = require('fs'),
Converter = require('csvtojson').Converter,
csvConverter = new Converter();

function jsonFile(filename,callback) {

  csvConverter.on('end_parsed',function(jsonObj) {    
    return callback(null, jsonObj);
  });

  fs.createReadStream(browser.params.testdataFilePath).pipe(csvConverter);                                 

}

module.exports = {
                    language: jsonFile
                 };
