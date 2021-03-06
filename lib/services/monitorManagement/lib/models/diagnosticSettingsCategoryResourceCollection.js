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
 * Represents a collection of diagnostic setting category resources.
 *
 */
class DiagnosticSettingsCategoryResourceCollection {
  /**
   * Create a DiagnosticSettingsCategoryResourceCollection.
   * @property {array} [value] The collection of diagnostic settings category
   * resources.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DiagnosticSettingsCategoryResourceCollection
   *
   * @returns {object} metadata of DiagnosticSettingsCategoryResourceCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DiagnosticSettingsCategoryResourceCollection',
      type: {
        name: 'Composite',
        className: 'DiagnosticSettingsCategoryResourceCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DiagnosticSettingsCategoryResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'DiagnosticSettingsCategoryResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DiagnosticSettingsCategoryResourceCollection;
