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
 * Initializes a new instance of the VpnClientConfiguration class.
 * @constructor
 * VpnClientConfiguration for P2S client
 * @member {object} [vpnClientAddressPool] Gets or sets the reference of the
 * Address space resource which represents Address space for P2S VpnClient.
 * 
 * @member {array} [vpnClientAddressPool.addressPrefixes] Gets or sets List of
 * address blocks reserved for this virtual network in CIDR notation
 * 
 * @member {array} [vpnClientRootCertificates] VpnClientRootCertificate for
 * Virtual network gateway.
 * 
 * @member {array} [vpnClientRevokedCertificates] VpnClientRevokedCertificate
 * for Virtual network gateway.
 * 
 */
function VpnClientConfiguration(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.vpnClientAddressPool) {
      this.vpnClientAddressPool = new models['AddressSpace'](parameters.vpnClientAddressPool);
    }
    if (parameters.vpnClientRootCertificates) {
      var tempParametersvpnClientRootCertificates = [];
      parameters.vpnClientRootCertificates.forEach(function(element) {
        if (element) {
          element = new models['VpnClientRootCertificate'](element);
        }
        tempParametersvpnClientRootCertificates.push(element);
      });
      this.vpnClientRootCertificates = tempParametersvpnClientRootCertificates;
    }
    if (parameters.vpnClientRevokedCertificates) {
      var tempParametersvpnClientRevokedCertificates = [];
      parameters.vpnClientRevokedCertificates.forEach(function(element1) {
        if (element1) {
          element1 = new models['VpnClientRevokedCertificate'](element1);
        }
        tempParametersvpnClientRevokedCertificates.push(element1);
      });
      this.vpnClientRevokedCertificates = tempParametersvpnClientRevokedCertificates;
    }
  }    
}


/**
 * Validate the payload against the VpnClientConfiguration schema
 *
 * @param {JSON} payload
 *
 */
VpnClientConfiguration.prototype.serialize = function () {
  var payload = {};
  if (this['vpnClientAddressPool']) {
    payload['vpnClientAddressPool'] = this['vpnClientAddressPool'].serialize();
  }

  if (util.isArray(this['vpnClientRootCertificates'])) {
    payload['vpnClientRootCertificates'] = [];
    for (var i = 0; i < this['vpnClientRootCertificates'].length; i++) {
      if (this['vpnClientRootCertificates'][i]) {
        payload['vpnClientRootCertificates'][i] = this['vpnClientRootCertificates'][i].serialize();
      }
    }
  }

  if (util.isArray(this['vpnClientRevokedCertificates'])) {
    payload['vpnClientRevokedCertificates'] = [];
    for (var i1 = 0; i1 < this['vpnClientRevokedCertificates'].length; i1++) {
      if (this['vpnClientRevokedCertificates'][i1]) {
        payload['vpnClientRevokedCertificates'][i1] = this['vpnClientRevokedCertificates'][i1].serialize();
      }
    }
  }

  return payload;
};

/**
 * Deserialize the instance to VpnClientConfiguration schema
 *
 * @param {JSON} instance
 *
 */
VpnClientConfiguration.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['vpnClientAddressPool']) {
      this['vpnClientAddressPool'] = new models['AddressSpace']().deserialize(instance['vpnClientAddressPool']);
    }

    if (instance['vpnClientRootCertificates']) {
      var tempInstancevpnClientRootCertificates = [];
      instance['vpnClientRootCertificates'].forEach(function(element2) {
        if (element2) {
          element2 = new models['VpnClientRootCertificate']().deserialize(element2);
        }
        tempInstancevpnClientRootCertificates.push(element2);
      });
      this['vpnClientRootCertificates'] = tempInstancevpnClientRootCertificates;
    }

    if (instance['vpnClientRevokedCertificates']) {
      var tempInstancevpnClientRevokedCertificates = [];
      instance['vpnClientRevokedCertificates'].forEach(function(element3) {
        if (element3) {
          element3 = new models['VpnClientRevokedCertificate']().deserialize(element3);
        }
        tempInstancevpnClientRevokedCertificates.push(element3);
      });
      this['vpnClientRevokedCertificates'] = tempInstancevpnClientRevokedCertificates;
    }
  }

  return this;
};

module.exports = VpnClientConfiguration;