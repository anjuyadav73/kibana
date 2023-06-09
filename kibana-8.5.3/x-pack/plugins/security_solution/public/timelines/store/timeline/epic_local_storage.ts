/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { Action } from 'redux';
import { map, filter, ignoreElements, tap, withLatestFrom, delay } from 'rxjs/operators';
import type { Epic } from 'redux-observable';
import { get } from 'lodash/fp';

import type { TimelineIdLiteral } from '../../../../common/types/timeline';
import { addTimelineInStorage } from '../../containers/local_storage';

import {
  removeColumn,
  upsertColumn,
  applyDeltaToColumnWidth,
  setExcludedRowRendererIds,
  updateColumns,
  updateColumnOrder,
  updateColumnWidth,
  updateItemsPerPage,
  updateSort,
} from './actions';
import type { TimelineEpicDependencies } from './types';
import { isNotNull } from './helpers';

const timelineActionTypes = [
  removeColumn.type,
  upsertColumn.type,
  applyDeltaToColumnWidth.type,
  updateColumns.type,
  updateColumnOrder.type,
  updateColumnWidth.type,
  updateItemsPerPage.type,
  updateSort.type,
  setExcludedRowRendererIds.type,
];

export const isPageTimeline = (timelineId: string | undefined): boolean =>
  // Is not a flyout timeline
  !(timelineId && timelineId.toLowerCase().startsWith('timeline'));

export const createTimelineLocalStorageEpic =
  <State>(): Epic<Action, Action, State, TimelineEpicDependencies<State>> =>
  (action$, state$, { timelineByIdSelector, storage }) => {
    const timeline$ = state$.pipe(map(timelineByIdSelector), filter(isNotNull));
    return action$.pipe(
      delay(500),
      withLatestFrom(timeline$),
      filter(([action]) => isPageTimeline(get('payload.id', action))),
      tap(([action, timelineById]) => {
        if (timelineActionTypes.includes(action.type)) {
          if (storage) {
            const timelineId: TimelineIdLiteral = get('payload.id', action);
            addTimelineInStorage(storage, timelineId, timelineById[timelineId]);
          }
        }
      }),
      ignoreElements()
    );
  };
