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
 * The workflow run action.
 *
 * @extends models['SubResource']
 */
class WorkflowRunAction extends models['SubResource'] {
  /**
   * Create a WorkflowRunAction.
   * @member {date} [startTime] Gets the start time.
   * @member {date} [endTime] Gets the end time.
   * @member {string} [status] Gets the status. Possible values include:
   * 'NotSpecified', 'Paused', 'Running', 'Waiting', 'Succeeded', 'Skipped',
   * 'Suspended', 'Cancelled', 'Failed', 'Faulted', 'TimedOut', 'Aborted',
   * 'Ignored'
   * @member {string} [code] Gets the code.
   * @member {object} [error] Gets the error.
   * @member {string} [trackingId] Gets the tracking id.
   * @member {object} [correlation] The correlation properties.
   * @member {string} [correlation.clientTrackingId] The client tracking id.
   * @member {object} [inputsLink] Gets the link to inputs.
   * @member {string} [inputsLink.uri] The content link URI.
   * @member {string} [inputsLink.contentVersion] The content version.
   * @member {number} [inputsLink.contentSize] The content size.
   * @member {object} [inputsLink.contentHash] The content hash.
   * @member {string} [inputsLink.contentHash.algorithm] The algorithm of the
   * content hash.
   * @member {string} [inputsLink.contentHash.value] The value of the content
   * hash.
   * @member {object} [inputsLink.metadata] The metadata.
   * @member {object} [outputsLink] Gets the link to outputs.
   * @member {string} [outputsLink.uri] The content link URI.
   * @member {string} [outputsLink.contentVersion] The content version.
   * @member {number} [outputsLink.contentSize] The content size.
   * @member {object} [outputsLink.contentHash] The content hash.
   * @member {string} [outputsLink.contentHash.algorithm] The algorithm of the
   * content hash.
   * @member {string} [outputsLink.contentHash.value] The value of the content
   * hash.
   * @member {object} [outputsLink.metadata] The metadata.
   * @member {object} [trackedProperties] Gets the tracked properties.
   * @member {array} [retryHistory] Gets the retry histories.
   * @member {string} [name] Gets the workflow run action name.
   * @member {string} [type] Gets the workflow run action type.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WorkflowRunAction
   *
   * @returns {object} metadata of WorkflowRunAction
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowRunAction',
      type: {
        name: 'Composite',
        className: 'WorkflowRunAction',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.endTime',
            type: {
              name: 'DateTime'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'Paused', 'Running', 'Waiting', 'Succeeded', 'Skipped', 'Suspended', 'Cancelled', 'Failed', 'Faulted', 'TimedOut', 'Aborted', 'Ignored' ]
            }
          },
          code: {
            required: false,
            readOnly: true,
            serializedName: 'properties.code',
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            readOnly: true,
            serializedName: 'properties.error',
            type: {
              name: 'Object'
            }
          },
          trackingId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.trackingId',
            type: {
              name: 'String'
            }
          },
          correlation: {
            required: false,
            serializedName: 'properties.correlation',
            type: {
              name: 'Composite',
              className: 'Correlation'
            }
          },
          inputsLink: {
            required: false,
            readOnly: true,
            serializedName: 'properties.inputsLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          outputsLink: {
            required: false,
            readOnly: true,
            serializedName: 'properties.outputsLink',
            type: {
              name: 'Composite',
              className: 'ContentLink'
            }
          },
          trackedProperties: {
            required: false,
            readOnly: true,
            serializedName: 'properties.trackedProperties',
            type: {
              name: 'Object'
            }
          },
          retryHistory: {
            required: false,
            serializedName: 'properties.retryHistory',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RetryHistoryElementType',
                  type: {
                    name: 'Composite',
                    className: 'RetryHistory'
                  }
              }
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowRunAction;