/*
 * Bedrock Credential Curator Module Configuration
 *
 * Copyright (c) 2015 Digital Bazaar, Inc. All rights reserved.
 */
var config = require('bedrock').config;

config['credential-curator'] = {};

// map of credential formatters
//   formatter-name: function(credential, meta, callback(err, credential))
config['credential-curator'].formatters = {};