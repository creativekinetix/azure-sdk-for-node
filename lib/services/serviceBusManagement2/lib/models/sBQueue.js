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
 * Description of queue Resource.
 *
 * @extends models['Resource']
 */
class SBQueue extends models['Resource'] {
  /**
   * Create a SBQueue.
   * @member {object} [countDetails] Message Count Details.
   * @member {number} [countDetails.activeMessageCount] Number of active
   * messages in the queue, topic, or subscription.
   * @member {number} [countDetails.deadLetterMessageCount] Number of messages
   * that are dead lettered.
   * @member {number} [countDetails.scheduledMessageCount] Number of scheduled
   * messages.
   * @member {number} [countDetails.transferMessageCount] Number of messages
   * transferred to another queue, topic, or subscription.
   * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
   * messages transferred into dead letters.
   * @member {date} [createdAt] The exact time the message was created.
   * @member {date} [updatedAt] The exact time the message was updated.
   * @member {date} [accessedAt] Last time a message was sent, or the last time
   * there was a receive request to this queue.
   * @member {number} [sizeInBytes] The size of the queue, in bytes.
   * @member {number} [messageCount] The number of messages in the queue.
   * @member {moment.duration} [lockDuration] ISO 8601 timespan duration of a
   * peek-lock; that is, the amount of time that the message is locked for
   * other receivers. The maximum value for LockDuration is 5 minutes; the
   * default value is 1 minute.
   * @member {number} [maxSizeInMegabytes] The maximum size of the queue in
   * megabytes, which is the size of memory allocated for the queue. Default is
   * 1024.
   * @member {boolean} [requiresDuplicateDetection] A value indicating if this
   * queue requires duplicate detection.
   * @member {boolean} [requiresSession] A value that indicates whether the
   * queue supports the concept of sessions.
   * @member {moment.duration} [defaultMessageTimeToLive] ISO 8601 default
   * message timespan to live value. This is the duration after which the
   * message expires, starting from when the message is sent to Service Bus.
   * This is the default value used when TimeToLive is not set on a message
   * itself.
   * @member {boolean} [deadLetteringOnMessageExpiration] A value that
   * indicates whether this queue has dead letter support when a message
   * expires.
   * @member {moment.duration} [duplicateDetectionHistoryTimeWindow] ISO 8601
   * timeSpan structure that defines the duration of the duplicate detection
   * history. The default value is 10 minutes.
   * @member {number} [maxDeliveryCount] The maximum delivery count. A message
   * is automatically deadlettered after this number of deliveries. default
   * value is 10.
   * @member {string} [status] Enumerates the possible values for the status of
   * a messaging entity. Possible values include: 'Active', 'Disabled',
   * 'Restoring', 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting',
   * 'Renaming', 'Unknown'
   * @member {moment.duration} [autoDeleteOnIdle] ISO 8061 timeSpan idle
   * interval after which the queue is automatically deleted. The minimum
   * duration is 5 minutes.
   * @member {boolean} [enablePartitioning] A value that indicates whether the
   * queue is to be partitioned across multiple message brokers.
   * @member {boolean} [enableExpress] A value that indicates whether Express
   * Entities are enabled. An express queue holds a message in memory
   * temporarily before writing it to persistent storage.
   * @member {string} [forwardTo] Queue/Topic name to forward the messages
   * @member {string} [forwardDeadLetteredMessagesTo] Queue/Topic name to
   * forward the Dead Letter message
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SBQueue
   *
   * @returns {object} metadata of SBQueue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SBQueue',
      type: {
        name: 'Composite',
        className: 'SBQueue',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
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
          },
          countDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.countDetails',
            type: {
              name: 'Composite',
              className: 'MessageCountDetails'
            }
          },
          createdAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdAt',
            type: {
              name: 'DateTime'
            }
          },
          updatedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedAt',
            type: {
              name: 'DateTime'
            }
          },
          accessedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.accessedAt',
            type: {
              name: 'DateTime'
            }
          },
          sizeInBytes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.sizeInBytes',
            type: {
              name: 'Number'
            }
          },
          messageCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.messageCount',
            type: {
              name: 'Number'
            }
          },
          lockDuration: {
            required: false,
            serializedName: 'properties.lockDuration',
            type: {
              name: 'TimeSpan'
            }
          },
          maxSizeInMegabytes: {
            required: false,
            serializedName: 'properties.maxSizeInMegabytes',
            type: {
              name: 'Number'
            }
          },
          requiresDuplicateDetection: {
            required: false,
            serializedName: 'properties.requiresDuplicateDetection',
            type: {
              name: 'Boolean'
            }
          },
          requiresSession: {
            required: false,
            serializedName: 'properties.requiresSession',
            type: {
              name: 'Boolean'
            }
          },
          defaultMessageTimeToLive: {
            required: false,
            serializedName: 'properties.defaultMessageTimeToLive',
            type: {
              name: 'TimeSpan'
            }
          },
          deadLetteringOnMessageExpiration: {
            required: false,
            serializedName: 'properties.deadLetteringOnMessageExpiration',
            type: {
              name: 'Boolean'
            }
          },
          duplicateDetectionHistoryTimeWindow: {
            required: false,
            serializedName: 'properties.duplicateDetectionHistoryTimeWindow',
            type: {
              name: 'TimeSpan'
            }
          },
          maxDeliveryCount: {
            required: false,
            serializedName: 'properties.maxDeliveryCount',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Active', 'Disabled', 'Restoring', 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting', 'Renaming', 'Unknown' ]
            }
          },
          autoDeleteOnIdle: {
            required: false,
            serializedName: 'properties.autoDeleteOnIdle',
            type: {
              name: 'TimeSpan'
            }
          },
          enablePartitioning: {
            required: false,
            serializedName: 'properties.enablePartitioning',
            type: {
              name: 'Boolean'
            }
          },
          enableExpress: {
            required: false,
            serializedName: 'properties.enableExpress',
            type: {
              name: 'Boolean'
            }
          },
          forwardTo: {
            required: false,
            serializedName: 'properties.forwardTo',
            type: {
              name: 'String'
            }
          },
          forwardDeadLetteredMessagesTo: {
            required: false,
            serializedName: 'properties.forwardDeadLetteredMessagesTo',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SBQueue;