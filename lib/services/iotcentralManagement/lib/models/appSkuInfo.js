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
 * Information about the SKU of the IoT Central application.
 *
 */
class AppSkuInfo {
  /**
   * Create a AppSkuInfo.
   * @member {string} name The name of the SKU. Possible values include: 'F1',
   * 'S1'
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppSkuInfo
   *
   * @returns {object} metadata of AppSkuInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppSkuInfo',
      type: {
        name: 'Composite',
        className: 'AppSkuInfo',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppSkuInfo;
