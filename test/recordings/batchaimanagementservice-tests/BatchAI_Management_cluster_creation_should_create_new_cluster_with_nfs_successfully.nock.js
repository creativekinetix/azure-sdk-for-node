// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'northeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster4?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/e4911a69-f835-4212-8970-2e961ca59efb?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '65cba070-4a39-4349-8a10-54ef42df55dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/e4911a69-f835-4212-8970-2e961ca59efb?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a0561745-332a-4a98-affe-f192285fb5cb',
  'x-ms-correlation-request-id': 'a0561745-332a-4a98-affe-f192285fb5cb',
  'x-ms-routing-request-id': 'WESTUS:20180614T034714Z:a0561745-332a-4a98-affe-f192285fb5cb',
  date: 'Thu, 14 Jun 2018 03:47:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster4?api-version=2018-05-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationstatuses/e4911a69-f835-4212-8970-2e961ca59efb?api-version=2018-05-01',
  'retry-after': '15',
  'request-id': '65cba070-4a39-4349-8a10-54ef42df55dd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/e4911a69-f835-4212-8970-2e961ca59efb?api-version=2018-05-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'a0561745-332a-4a98-affe-f192285fb5cb',
  'x-ms-correlation-request-id': 'a0561745-332a-4a98-affe-f192285fb5cb',
  'x-ms-routing-request-id': 'WESTUS:20180614T034714Z:a0561745-332a-4a98-affe-f192285fb5cb',
  date: 'Thu, 14 Jun 2018 03:47:13 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/e4911a69-f835-4212-8970-2e961ca59efb?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/e4911a69-f835-4212-8970-2e961ca59efb\",\"name\":\"e4911a69-f835-4212-8970-2e961ca59efb\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:47:14.088Z\",\"endTime\":\"2018-06-14T03:47:33.451Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster4\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f516e2d9-cbb3-4a38-bd25-b15355a2e26c',
  'request-id': '1e2cf1da-6253-42ab-b228-3af691f61f8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f516e2d9-cbb3-4a38-bd25-b15355a2e26c',
  'x-ms-routing-request-id': 'WESTUS:20180614T034745Z:f516e2d9-cbb3-4a38-bd25-b15355a2e26c',
  date: 'Thu, 14 Jun 2018 03:47:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/e4911a69-f835-4212-8970-2e961ca59efb?api-version=2018-05-01')
  .reply(200, "{\"id\":\"https://management.azure.com/subscriptions/00000000-0000-0000-0000-000000000000/providers/Microsoft.BatchAI/locations/northeurope/operationresults/e4911a69-f835-4212-8970-2e961ca59efb\",\"name\":\"e4911a69-f835-4212-8970-2e961ca59efb\",\"status\":\"Succeeded\",\"startTime\":\"2018-06-14T03:47:14.088Z\",\"endTime\":\"2018-06-14T03:47:33.451Z\",\"properties\":{\"resourceId\":\"00000000-0000-0000-0000-000000000000$nodetestgroup1941$workspace$cluster4\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '439',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f516e2d9-cbb3-4a38-bd25-b15355a2e26c',
  'request-id': '1e2cf1da-6253-42ab-b228-3af691f61f8c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f516e2d9-cbb3-4a38-bd25-b15355a2e26c',
  'x-ms-routing-request-id': 'WESTUS:20180614T034745Z:f516e2d9-cbb3-4a38-bd25-b15355a2e26c',
  date: 'Thu, 14 Jun 2018 03:47:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster4?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster4\",\"name\":\"cluster4\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:47:14.072Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:47:33.891Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:47:33.435Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"},\"nodeSetup\":{\"mountVolumes\":{\"fileServers\":[{\"fileServer\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/fileservers/nfs\"},\"relativeMountPath\":\"nfs\",\"mountOptions\":\"rw\"}]}},\"subnet\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/fileserverrg-ae0a1837-f513-46a3-aa66-0504da0e44bb/providers/Microsoft.Network/virtualNetworks/ae0a1837-f513-46a3-aa66-0504da0e44bbvnet/subnets/Subnet-1\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1855',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:47:14 GMT',
  etag: '"0x8D5D1A98437E78E"',
  'x-ms-request-id': '763ad76b-04a3-473e-bcab-0e369d34720e',
  'request-id': 'bc82222e-f184-4f64-9efc-229824998f90',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '763ad76b-04a3-473e-bcab-0e369d34720e',
  'x-ms-routing-request-id': 'WESTUS:20180614T034747Z:763ad76b-04a3-473e-bcab-0e369d34720e',
  date: 'Thu, 14 Jun 2018 03:47:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster4?api-version=2018-05-01')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/clusters/cluster4\",\"name\":\"cluster4\",\"type\":\"Microsoft.BatchAI/workspaces/clusters\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"steady\",\"creationTime\":\"2018-06-14T03:47:14.072Z\",\"allocationStateTransitionTime\":\"2018-06-14T03:47:33.891Z\",\"provisioningStateTransitionTime\":\"2018-06-14T03:47:33.435Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":0,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSshPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"},\"nodeSetup\":{\"mountVolumes\":{\"fileServers\":[{\"fileServer\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup1941/providers/Microsoft.BatchAI/workspaces/workspace/fileservers/nfs\"},\"relativeMountPath\":\"nfs\",\"mountOptions\":\"rw\"}]}},\"subnet\":{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/fileserverrg-ae0a1837-f513-46a3-aa66-0504da0e44bb/providers/Microsoft.Network/virtualNetworks/ae0a1837-f513-46a3-aa66-0504da0e44bbvnet/subnets/Subnet-1\"}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1855',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Thu, 14 Jun 2018 03:47:14 GMT',
  etag: '"0x8D5D1A98437E78E"',
  'x-ms-request-id': '763ad76b-04a3-473e-bcab-0e369d34720e',
  'request-id': 'bc82222e-f184-4f64-9efc-229824998f90',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '763ad76b-04a3-473e-bcab-0e369d34720e',
  'x-ms-routing-request-id': 'WESTUS:20180614T034747Z:763ad76b-04a3-473e-bcab-0e369d34720e',
  date: 'Thu, 14 Jun 2018 03:47:47 GMT',
  connection: 'close' });
 return result; }]];