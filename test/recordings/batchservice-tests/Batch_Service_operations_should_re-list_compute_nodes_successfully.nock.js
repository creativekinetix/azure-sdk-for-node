// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test3';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test3.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test3.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-12-11T18:42:34.9601236Z\",\"lastBootTime\":\"2018-12-11T18:32:13.820626Z\",\"allocationTime\":\"2018-12-11T18:28:36.9291366Z\",\"ipAddress\":\"10.0.0.6\",\"affinityId\":\"TVM:tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-12-11T18:32:14.993407Z\",\"endTime\":\"2018-12-11T18:32:15.698035Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0\r\n      },\"certificateReferences\":[\r\n        \r\n      ],\"isDedicated\":true,\"endpointConfiguration\":{\r\n        \"inboundEndpoints\":[\r\n          {\r\n            \"name\":\"Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput\",\"protocol\":\"tcp\",\"publicIPAddress\":\"13.77.205.84\",\"frontendPort\":3389,\"backendPort\":20000\r\n          }\r\n        ]\r\n      },\"nodeAgentInfo\":{\r\n        \"lastUpdateTime\":\"2018-12-11T18:32:13.820626Z\",\"version\":\"1.4.7\"\r\n      }\r\n    },{\r\n      \"id\":\"tvmps_bc8f91eb73db7fd10d852ff323ee06ef51abb84fc93e7dae4e18fa0b0b95b030_d\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_bc8f91eb73db7fd10d852ff323ee06ef51abb84fc93e7dae4e18fa0b0b95b030_d\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-12-11T18:46:38.81119Z\",\"lastBootTime\":\"2018-12-11T18:31:51.947806Z\",\"allocationTime\":\"2018-12-11T18:28:36.9291366Z\",\"ipAddress\":\"10.0.0.5\",\"affinityId\":\"TVM:tvmps_bc8f91eb73db7fd10d852ff323ee06ef51abb84fc93e7dae4e18fa0b0b95b030_d\",\"vmSize\":\"small\",\"totalTasksRun\":8,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"HelloWorldNodeSDKTestTask2\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:44:53.418485Z\",\"endTime\":\"2018-12-11T18:44:54.22158Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"HelloWorldNodeSDKTestTask\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:44:55.467713Z\",\"endTime\":\"2018-12-11T18:45:15.176746Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"TaskWithAuthTokenSettings\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:46:36.128274Z\",\"endTime\":\"2018-12-11T18:46:36.705399Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithUserIdentity\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"TaskWithUserIdentity\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:46:38.534064Z\",\"endTime\":\"2018-12-11T18:46:38.769842Z\",\"exitCode\":2,\"failureInfo\":{\r\n              \"category\":\"UserError\",\"code\":\"FailureExitCode\",\"message\":\"The task exited with an exit code representing a failure\",\"details\":[\r\n                {\r\n                  \"name\":\"Message\",\"value\":\"The task exited with an exit code representing a failure\"\r\n                }\r\n              ]\r\n            },\"result\":\"failure\",\"retryCount\":3,\"lastRetryTime\":\"2018-12-11T18:46:38.534064Z\",\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-12-11T18:31:54.456912Z\",\"endTime\":\"2018-12-11T18:31:55.082974Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0\r\n      },\"certificateReferences\":[\r\n        \r\n      ],\"isDedicated\":true,\"endpointConfiguration\":{\r\n        \"inboundEndpoints\":[\r\n          {\r\n            \"name\":\"Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput\",\"protocol\":\"tcp\",\"publicIPAddress\":\"13.77.205.84\",\"frontendPort\":3389,\"backendPort\":20000\r\n          }\r\n        ]\r\n      },\"nodeAgentInfo\":{\r\n        \"lastUpdateTime\":\"2018-12-11T18:31:51.947806Z\",\"version\":\"1.4.7\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '13fa96c6-5ae6-4a42-80bd-4558814c3d22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:46:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test3.westcentralus.batch.azure.com:443')
  .get('/pools/nodesdktestpool1/nodes?api-version=2018-12-01.8.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test3.westcentralus.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d\",\"state\":\"reimaging\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-12-11T18:42:34.9601236Z\",\"lastBootTime\":\"2018-12-11T18:32:13.820626Z\",\"allocationTime\":\"2018-12-11T18:28:36.9291366Z\",\"ipAddress\":\"10.0.0.6\",\"affinityId\":\"TVM:tvmps_15c61fea08a34e0fe431ba70cdf2156682bec1e01fdda442f2dccde21908ed91_d\",\"vmSize\":\"small\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-12-11T18:32:14.993407Z\",\"endTime\":\"2018-12-11T18:32:15.698035Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0\r\n      },\"certificateReferences\":[\r\n        \r\n      ],\"isDedicated\":true,\"endpointConfiguration\":{\r\n        \"inboundEndpoints\":[\r\n          {\r\n            \"name\":\"Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput\",\"protocol\":\"tcp\",\"publicIPAddress\":\"13.77.205.84\",\"frontendPort\":3389,\"backendPort\":20000\r\n          }\r\n        ]\r\n      },\"nodeAgentInfo\":{\r\n        \"lastUpdateTime\":\"2018-12-11T18:32:13.820626Z\",\"version\":\"1.4.7\"\r\n      }\r\n    },{\r\n      \"id\":\"tvmps_bc8f91eb73db7fd10d852ff323ee06ef51abb84fc93e7dae4e18fa0b0b95b030_d\",\"url\":\"https://test3.westcentralus.batch.azure.com/pools/nodesdktestpool1/nodes/tvmps_bc8f91eb73db7fd10d852ff323ee06ef51abb84fc93e7dae4e18fa0b0b95b030_d\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2018-12-11T18:46:38.81119Z\",\"lastBootTime\":\"2018-12-11T18:31:51.947806Z\",\"allocationTime\":\"2018-12-11T18:28:36.9291366Z\",\"ipAddress\":\"10.0.0.5\",\"affinityId\":\"TVM:tvmps_bc8f91eb73db7fd10d852ff323ee06ef51abb84fc93e7dae4e18fa0b0b95b030_d\",\"vmSize\":\"small\",\"totalTasksRun\":8,\"totalTasksSucceeded\":3,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"HelloWorldNodeSDKTestTask2\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:44:53.418485Z\",\"endTime\":\"2018-12-11T18:44:54.22158Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"HelloWorldNodeSDKTestTask\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:44:55.467713Z\",\"endTime\":\"2018-12-11T18:45:15.176746Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithAuthTokenSettings\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"TaskWithAuthTokenSettings\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:46:36.128274Z\",\"endTime\":\"2018-12-11T18:46:36.705399Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        },{\r\n          \"taskUrl\":\"https://test3.westcentralus.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/tasks/TaskWithUserIdentity\",\"jobId\":\"HelloWorldJobNodeSDKTest\",\"taskId\":\"TaskWithUserIdentity\",\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2018-12-11T18:46:38.534064Z\",\"endTime\":\"2018-12-11T18:46:38.769842Z\",\"exitCode\":2,\"failureInfo\":{\r\n              \"category\":\"UserError\",\"code\":\"FailureExitCode\",\"message\":\"The task exited with an exit code representing a failure\",\"details\":[\r\n                {\r\n                  \"name\":\"Message\",\"value\":\"The task exited with an exit code representing a failure\"\r\n                }\r\n              ]\r\n            },\"result\":\"failure\",\"retryCount\":3,\"lastRetryTime\":\"2018-12-11T18:46:38.534064Z\",\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo hello > hello.txt\",\"userIdentity\":{\r\n          \"autoUser\":{\r\n            \"elevationLevel\":\"nonadmin\"\r\n          }\r\n        },\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2018-12-11T18:31:54.456912Z\",\"endTime\":\"2018-12-11T18:31:55.082974Z\",\"exitCode\":0,\"result\":\"success\",\"retryCount\":0\r\n      },\"certificateReferences\":[\r\n        \r\n      ],\"isDedicated\":true,\"endpointConfiguration\":{\r\n        \"inboundEndpoints\":[\r\n          {\r\n            \"name\":\"Microsoft.WindowsAzure.Plugins.RemoteForwarder.RdpInput\",\"protocol\":\"tcp\",\"publicIPAddress\":\"13.77.205.84\",\"frontendPort\":3389,\"backendPort\":20000\r\n          }\r\n        ]\r\n      },\"nodeAgentInfo\":{\r\n        \"lastUpdateTime\":\"2018-12-11T18:31:51.947806Z\",\"version\":\"1.4.7\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '13fa96c6-5ae6-4a42-80bd-4558814c3d22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 11 Dec 2018 18:46:50 GMT',
  connection: 'close' });
 return result; }]];