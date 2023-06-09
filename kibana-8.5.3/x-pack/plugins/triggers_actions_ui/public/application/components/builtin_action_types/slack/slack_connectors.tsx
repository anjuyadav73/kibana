/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { EuiLink } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n-react';
import { FieldConfig, UseField } from '@kbn/es-ui-shared-plugin/static/forms/hook_form_lib';
import { fieldValidators } from '@kbn/es-ui-shared-plugin/static/forms/helpers';
import { Field } from '@kbn/es-ui-shared-plugin/static/forms/components';
import { DocLinksStart } from '@kbn/core/public';

import { ActionConnectorFieldsProps } from '../../../../types';
import { useKibana } from '../../../../common/lib/kibana';
import * as i18n from './translations';

const { urlField } = fieldValidators;

const getWebhookUrlConfig = (docLinks: DocLinksStart): FieldConfig => ({
  label: i18n.WEBHOOK_URL_LABEL,
  helpText: (
    <EuiLink href={docLinks.links.alerting.slackAction} target="_blank">
      <FormattedMessage
        id="xpack.triggersActionsUI.components.builtinActionTypes.slackAction.webhookUrlHelpLabel"
        defaultMessage="Create a Slack Webhook URL"
      />
    </EuiLink>
  ),
  validations: [
    {
      validator: urlField(i18n.WEBHOOK_URL_INVALID),
    },
  ],
});

const SlackActionFields: React.FunctionComponent<ActionConnectorFieldsProps> = ({
  isEdit,
  readOnly,
}) => {
  const { docLinks } = useKibana().services;

  return (
    <UseField
      path="secrets.webhookUrl"
      config={getWebhookUrlConfig(docLinks)}
      component={Field}
      componentProps={{
        euiFieldProps: {
          readOnly,
          'data-test-subj': 'slackWebhookUrlInput',
          fullWidth: true,
        },
      }}
    />
  );
};

// eslint-disable-next-line import/no-default-export
export { SlackActionFields as default };
