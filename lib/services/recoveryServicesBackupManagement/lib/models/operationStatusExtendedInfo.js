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
 * Base class for additional information of operation status.
 *
 */
class OperationStatusExtendedInfo {
  /**
   * Create a OperationStatusExtendedInfo.
   * @member {string} objectType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationStatusExtendedInfo
   *
   * @returns {object} metadata of OperationStatusExtendedInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationStatusExtendedInfo',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'objectType',
          clientName: 'objectType'
        },
        uberParent: 'OperationStatusExtendedInfo',
        className: 'OperationStatusExtendedInfo',
        modelProperties: {
          objectType: {
            required: true,
            serializedName: 'objectType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationStatusExtendedInfo;