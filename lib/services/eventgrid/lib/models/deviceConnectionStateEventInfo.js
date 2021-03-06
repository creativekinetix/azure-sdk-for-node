/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Information about the device connection state event.
 *
 */
class DeviceConnectionStateEventInfo {
  /**
   * Create a DeviceConnectionStateEventInfo.
   * @member {string} [sequenceNumber] Sequence number is string representation
   * of a hexadecimal number. string compare can be used to identify the larger
   * number because both in ASCII and HEX numbers come after alphabets. If you
   * are converting the string to hex, then the number is a 256 bit number.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceConnectionStateEventInfo
   *
   * @returns {object} metadata of DeviceConnectionStateEventInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceConnectionStateEventInfo',
      type: {
        name: 'Composite',
        className: 'DeviceConnectionStateEventInfo',
        modelProperties: {
          sequenceNumber: {
            required: false,
            serializedName: 'sequenceNumber',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceConnectionStateEventInfo;
