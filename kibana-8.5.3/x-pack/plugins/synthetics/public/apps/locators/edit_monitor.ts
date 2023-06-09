/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { syntheticsEditMonitorLocatorID } from '@kbn/observability-plugin/common';

async function navigate({ monitorId }: { monitorId: string }) {
  return {
    app: 'uptime',
    path: `/edit-monitor/${monitorId}`,
    state: {},
  };
}

export const editMonitorNavigatorParams = {
  id: syntheticsEditMonitorLocatorID,
  getLocation: navigate,
};
