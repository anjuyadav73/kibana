/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { apm, timerange } from '../..';
import { ApmFields } from '../lib/apm/apm_fields';
import { Scenario } from '../cli/scenario';

import { RunOptions } from '../cli/utils/parse_run_cli_flags';
import { getSynthtraceEnvironment } from '../lib/utils/get_synthtrace_environment';
import { httpExitSpan } from '../lib/apm/span';

const ENVIRONMENT = getSynthtraceEnvironment(__filename);

const scenario: Scenario<ApmFields> = async (runOptions: RunOptions) => {
  return {
    generate: ({ from, to }) => {
      const range = timerange(from, to);
      const transactionName = '240rpm/75% 1000ms';
      const successfulTimestamps = range.interval('1s').rate(3);

      const opbeansRum = apm
        .service({ name: 'opbeans-rum', environment: ENVIRONMENT, agentName: 'rum-js' })
        .instance('my-instance');
      const opbeansNode = apm
        .service({ name: 'opbeans-node', environment: ENVIRONMENT, agentName: 'nodejs' })
        .instance('my-instance');
      const opbeansGo = apm
        .service({ name: 'opbeans-go', environment: ENVIRONMENT, agentName: 'go' })
        .instance('my-instance');

      const traces = successfulTimestamps.generator((timestamp) => {
        // opbeans-rum
        return opbeansRum
          .transaction({ transactionName })
          .duration(400)
          .timestamp(timestamp)
          .children(
            // opbeans-rum -> opbeans-node
            opbeansRum
              .span(
                httpExitSpan({
                  spanName: 'GET /api/products/top',
                  destinationUrl: 'http://opbeans-node:3000',
                })
              )
              .duration(300)
              .timestamp(timestamp)

              .children(
                // opbeans-node
                opbeansNode
                  .transaction({ transactionName: 'Initial transaction in opbeans-node' })
                  .duration(300)
                  .timestamp(timestamp)
                  .children(
                    opbeansNode
                      // opbeans-node -> opbeans-go
                      .span(
                        httpExitSpan({
                          spanName: 'GET opbeans-go:3000',
                          destinationUrl: 'http://opbeans-go:3000',
                        })
                      )
                      .timestamp(timestamp)
                      .duration(400)

                      .children(
                        // opbeans-go
                        opbeansGo

                          .transaction({ transactionName: 'Initial transaction in opbeans-go' })
                          .timestamp(timestamp)
                          .duration(200)
                          .children(
                            opbeansGo
                              .span({ spanName: 'custom_operation', spanType: 'custom' })
                              .timestamp(timestamp)
                              .duration(100)
                              .success()
                          )
                      )
                  )
              )
          );
      });

      return traces;
    },
  };
};

export default scenario;
