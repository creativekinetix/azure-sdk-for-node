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
 * Model class for event specific details for an event.
 *
 */
class EventSpecificDetails {
  /**
   * Create a EventSpecificDetails.
   * @member {string} instanceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventSpecificDetails
   *
   * @returns {object} metadata of EventSpecificDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventSpecificDetails',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'EventSpecificDetails',
        className: 'EventSpecificDetails',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
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

module.exports = EventSpecificDetails;