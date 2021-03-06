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
 * The task representing the deactivation operation on the node.
 *
 */
class NodeDeactivationTask {
  /**
   * Create a NodeDeactivationTask.
   * @property {object} [nodeDeactivationTaskId] Identity of the task related
   * to deactivation operation on the node.
   * @property {string} [nodeDeactivationTaskId.id] Value of the task id.
   * @property {string} [nodeDeactivationTaskId.nodeDeactivationTaskType] The
   * type of the task that performed the node deactivation. Following are the
   * possible values. Possible values include: 'Invalid', 'Infrastructure',
   * 'Repair', 'Client'
   * @property {string} [nodeDeactivationIntent] The intent or the reason for
   * deactivating the node. Following are the possible values for it. Possible
   * values include: 'Invalid', 'Pause', 'Restart', 'RemoveData', 'RemoveNode'
   */
  constructor() {
  }

  /**
   * Defines the metadata of NodeDeactivationTask
   *
   * @returns {object} metadata of NodeDeactivationTask
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeDeactivationTask',
      type: {
        name: 'Composite',
        className: 'NodeDeactivationTask',
        modelProperties: {
          nodeDeactivationTaskId: {
            required: false,
            serializedName: 'NodeDeactivationTaskId',
            type: {
              name: 'Composite',
              className: 'NodeDeactivationTaskId'
            }
          },
          nodeDeactivationIntent: {
            required: false,
            serializedName: 'NodeDeactivationIntent',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeDeactivationTask;
