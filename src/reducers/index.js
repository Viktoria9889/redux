/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'

import pageReducer from './page'
import inputReducer from './input'

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    page: pageReducer,
    input: inputReducer,
    ...injectedReducers,
  })

  return rootReducer
}
