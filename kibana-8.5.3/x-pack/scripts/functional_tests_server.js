/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

process.env.ALLOW_PERFORMANCE_HOOKS_IN_TASK_MANAGER = true;

require('../../src/setup_node_env');
require('@kbn/test').startServersCli(require.resolve('../test/functional/config.base.js'));
