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

const models = require('./index');

/**
 * A rule metric data source. The discriminator value is always
 * RuleMetricDataSource in this case.
 *
 * @extends models['RuleDataSource']
 */
class RuleMetricDataSource extends models['RuleDataSource'] {
  /**
   * Create a RuleMetricDataSource.
   * @member {string} [metricName] the name of the metric that defines what the
   * rule monitors.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RuleMetricDataSource
   *
   * @returns {object} metadata of RuleMetricDataSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource',
      type: {
        name: 'Composite',
        className: 'RuleMetricDataSource',
        modelProperties: {
          resourceUri: {
            required: false,
            serializedName: 'resourceUri',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: 'odata\\.type',
            type: {
              name: 'String'
            }
          },
          metricName: {
            required: false,
            serializedName: 'metricName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RuleMetricDataSource;