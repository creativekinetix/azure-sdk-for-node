// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:39:03 GMT',
  etag: '0x8D509DE003E2E52',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkinboundendpointpool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd6db2264-653e-42b5-82c5-d31edfe3d0ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkinboundendpointpool',
  date: 'Mon, 02 Oct 2017 21:39:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 02 Oct 2017 21:39:03 GMT',
  etag: '0x8D509DE003E2E52',
  location: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkinboundendpointpool',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd6db2264-653e-42b5-82c5-d31edfe3d0ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://batchtestnodesdk.japaneast.batch.azure.com/pools/nodesdkinboundendpointpool',
  date: 'Mon, 02 Oct 2017 21:39:03 GMT',
  connection: 'close' });
 return result; }]];