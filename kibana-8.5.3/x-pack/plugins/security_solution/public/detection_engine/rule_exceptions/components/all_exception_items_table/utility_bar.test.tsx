/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { mountWithIntl } from '@kbn/test-jest-helpers';

import { ExceptionsViewerUtility } from './utility_bar';
import { TestProviders } from '../../../../common/mock';

describe('ExceptionsViewerUtility', () => {
  it('it renders correct item counts', () => {
    const wrapper = mountWithIntl(
      <TestProviders>
        <ExceptionsViewerUtility
          pagination={{
            pageIndex: 0,
            pageSize: 50,
            totalItemCount: 105,
            pageSizeOptions: [5, 10, 20, 50, 100],
          }}
          lastUpdated={1660534202}
        />
      </TestProviders>
    );

    expect(wrapper.find('[data-test-subj="exceptionsShowing"]').at(0).text()).toEqual(
      'Showing 1-50 of 105'
    );
  });

  it('it renders last updated message', () => {
    const wrapper = mountWithIntl(
      <TestProviders>
        <ExceptionsViewerUtility
          pagination={{
            pageIndex: 0,
            pageSize: 50,
            totalItemCount: 1,
            pageSizeOptions: [5, 10, 20, 50, 100],
          }}
          lastUpdated={Date.now()}
        />
      </TestProviders>
    );

    expect(wrapper.find('[data-test-subj="exceptionsViewerLastUpdated"]').at(0).text()).toEqual(
      'Updated now'
    );
  });
});
