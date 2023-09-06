"use strict";

var path = require("path");

var utils = require("./utilities");
let xml2js = require('xml2js');

var constants = {
  googleServices: "google-services"
};

module.exports = function(context) {

  function getAppIdentifier(configPath) {
    const parseString = xml2js.parseString;
    const config_xml = fs.readFileSync(configPath).toString();
    let appId;

    parseString(config_xml, (err, config) => {
        if (err) return console.error(err);

        console.log("App identifier: " + config['widget']['$'].id);
        appId = config['widget']['$'].id;
    })
    return appId;
}

  fs.copyFileSync(context.opts.projectRoot + '/platforms/ios/www/' + getAppIdentifier(context.opts.projectRoot + '/platforms/ios/ECOP Mobile/config.xml') + '.firebase' + '/GoogleService-Info.plist' , path.join(context.opts.plugin.dir, 'GoogleService-Info.plist'));
}
