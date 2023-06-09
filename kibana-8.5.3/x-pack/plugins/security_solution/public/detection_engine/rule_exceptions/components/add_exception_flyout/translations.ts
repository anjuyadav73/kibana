/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { i18n } from '@kbn/i18n';

export const CANCEL = i18n.translate('xpack.securitySolution.exceptions.addException.cancel', {
  defaultMessage: 'Cancel',
});

export const ADD_EXCEPTION = i18n.translate(
  'xpack.securitySolution.exceptions.addException.addException',
  {
    defaultMessage: 'Add Rule Exception',
  }
);

export const ADD_ENDPOINT_EXCEPTION = i18n.translate(
  'xpack.securitySolution.exceptions.addException.addEndpointException',
  {
    defaultMessage: 'Add Endpoint Exception',
  }
);

export const ADD_EXCEPTION_ERROR = i18n.translate(
  'xpack.securitySolution.exceptions.addException.error',
  {
    defaultMessage: 'Failed to add exception',
  }
);

export const ADD_EXCEPTION_SUCCESS = i18n.translate(
  'xpack.securitySolution.exceptions.addException.success',
  {
    defaultMessage: 'Successfully added exception',
  }
);

export const ENDPOINT_QUARANTINE_TEXT = i18n.translate(
  'xpack.securitySolution.exceptions.addException.endpointQuarantineText',
  {
    defaultMessage:
      'On all Endpoint hosts, quarantined files that match the exception are automatically restored to their original locations. This exception applies to all rules using Endpoint exceptions.',
  }
);

export const BULK_CLOSE_LABEL = i18n.translate(
  'xpack.securitySolution.exceptions.addException.bulkCloseLabel',
  {
    defaultMessage: 'Close all alerts that match this exception and were generated by this rule',
  }
);

export const BULK_CLOSE_LABEL_DISABLED = i18n.translate(
  'xpack.securitySolution.exceptions.addException.bulkCloseLabel.disabled',
  {
    defaultMessage:
      'Close all alerts that match this exception and were generated by this rule (Lists and non-ECS fields are not supported)',
  }
);

export const EXCEPTION_BUILDER_INFO = i18n.translate(
  'xpack.securitySolution.exceptions.addException.infoLabel',
  {
    defaultMessage: "Alerts are generated when the rule's conditions are met, except when:",
  }
);

export const ADD_EXCEPTION_SEQUENCE_WARNING = i18n.translate(
  'xpack.securitySolution.exceptions.addException.sequenceWarning',
  {
    defaultMessage:
      "This rule's query contains an EQL sequence statement. The exception created will apply to all events in the sequence.",
  }
);

export const OPERATING_SYSTEM_PLACEHOLDER = i18n.translate(
  'xpack.securitySolution.exceptions.addException.operatingSystemPlaceHolder',
  {
    defaultMessage: 'Select an operating system',
  }
);
