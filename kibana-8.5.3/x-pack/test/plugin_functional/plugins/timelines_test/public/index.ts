/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { PluginInitializer } from '@kbn/core/public';
import {
  TimelinesTestPlugin,
  TimelinesTestPluginSetupDependencies,
  TimelinesTestPluginStartDependencies,
} from './plugin';

export const plugin: PluginInitializer<
  void,
  void,
  TimelinesTestPluginSetupDependencies,
  TimelinesTestPluginStartDependencies
> = () => new TimelinesTestPlugin();
