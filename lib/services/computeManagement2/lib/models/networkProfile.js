/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NetworkProfile class.
 * @constructor
 * Describes a network profile.
 * @member {array} [networkInterfaces] Gets or sets the network interfaces.
 * 
 */
function NetworkProfile(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.networkInterfaces) {
      var tempParametersnetworkInterfaces = [];
      parameters.networkInterfaces.forEach(function(element) {
        if (element) {
          element = new models['NetworkInterfaceReference'](element);
        }
        tempParametersnetworkInterfaces.push(element);
      });
      this.networkInterfaces = tempParametersnetworkInterfaces;
    }
  }    
}


/**
 * Validate the payload against the NetworkProfile schema
 *
 * @param {JSON} payload
 *
 */
NetworkProfile.prototype.serialize = function () {
  var payload = {};
  if (util.isArray(this['networkInterfaces'])) {
    payload['networkInterfaces'] = [];
    for (var i = 0; i < this['networkInterfaces'].length; i++) {
      if (this['networkInterfaces'][i]) {
        payload['networkInterfaces'][i] = this['networkInterfaces'][i].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to NetworkProfile schema
 *
 * @param {JSON} instance
 *
 */
NetworkProfile.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['networkInterfaces']) {
      var tempInstancenetworkInterfaces = [];
      instance['networkInterfaces'].forEach(function(element1) {
        if (element1) {
          element1 = new models['NetworkInterfaceReference']().deserialize(element1);
        }
        tempInstancenetworkInterfaces.push(element1);
      });
      this['networkInterfaces'] = tempInstancenetworkInterfaces;
    }
  }

  return this;
};

module.exports = NetworkProfile;