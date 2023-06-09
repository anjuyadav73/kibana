/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { mount } from 'enzyme';

import { ExceptionListTypeEnum } from '@kbn/securitysolution-io-ts-list-types';

import { ExeptionItemsViewerEmptyPrompts } from './empty_viewer_state';
import * as i18n from './translations';

describe('ExeptionItemsViewerEmptyPrompts', () => {
  it('it renders loading screen when "currentState" is "loading"', () => {
    const wrapper = mount(
      <ExeptionItemsViewerEmptyPrompts
        isReadOnly={false}
        listType={ExceptionListTypeEnum.DETECTION}
        currentState="loading"
        onCreateExceptionListItem={jest.fn()}
      />
    );

    expect(
      wrapper.find('[data-test-subj="exceptionItemViewerEmptyPrompts-loading"]').exists()
    ).toBeTruthy();
  });

  it('it renders empty search screen when "currentState" is "empty_search"', () => {
    const wrapper = mount(
      <ExeptionItemsViewerEmptyPrompts
        isReadOnly={false}
        listType={ExceptionListTypeEnum.DETECTION}
        currentState="empty_search"
        onCreateExceptionListItem={jest.fn()}
      />
    );

    expect(
      wrapper.find('[data-test-subj="exceptionItemViewerEmptyPrompts-emptySearch"]').exists()
    ).toBeTruthy();
  });

  it('it renders no endpoint items screen when "currentState" is "empty" and "listType" is "endpoint"', () => {
    const wrapper = mount(
      <ExeptionItemsViewerEmptyPrompts
        isReadOnly={false}
        listType={ExceptionListTypeEnum.ENDPOINT}
        currentState="empty"
        onCreateExceptionListItem={jest.fn()}
      />
    );

    expect(wrapper.find('[data-test-subj="exceptionsEmptyPromptBody"]').at(0).text()).toEqual(
      i18n.EXCEPTION_EMPTY_ENDPOINT_PROMPT_BODY
    );
    expect(wrapper.find('[data-test-subj="exceptionsEmptyPromptButton"]').at(0).text()).toEqual(
      i18n.EXCEPTION_EMPTY_PROMPT_ENDPOINT_BUTTON
    );
    expect(
      wrapper.find('[data-test-subj="exceptionItemViewerEmptyPrompts-empty-endpoint"]').exists()
    ).toBeTruthy();
  });

  it('it renders no exception items screen when "currentState" is "empty" and "listType" is "detection"', () => {
    const wrapper = mount(
      <ExeptionItemsViewerEmptyPrompts
        isReadOnly={false}
        listType={ExceptionListTypeEnum.DETECTION}
        currentState="empty"
        onCreateExceptionListItem={jest.fn()}
      />
    );

    expect(wrapper.find('[data-test-subj="exceptionsEmptyPromptBody"]').at(0).text()).toEqual(
      i18n.EXCEPTION_EMPTY_PROMPT_BODY
    );
    expect(wrapper.find('[data-test-subj="exceptionsEmptyPromptButton"]').at(0).text()).toEqual(
      i18n.EXCEPTION_EMPTY_PROMPT_BUTTON
    );
    expect(
      wrapper.find('[data-test-subj="exceptionItemViewerEmptyPrompts-empty-detection"]').exists()
    ).toBeTruthy();
  });
});
