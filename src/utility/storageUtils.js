import moment from 'moment';
import { objectIntersection } from './objectKeysManagementUtils';

export const LocalStorageKeys = {
  REDUX_LOCAL_STORAGE: 'state',
  RecentSearches: 'RECENT_SEARCHES',
  Itineraries: 'ITINERARIES', // TODO: Remove after local development, this is just for test purposes
  Ungated: 'UNGATED' // Flag to ungate deals pages
};

export function loadStorageDateConversion(dateString) {
  let dateStringToConvert = dateString;

  if (dateStringToConvert) {
    dateStringToConvert =
      dateStringToConvert.hasOwnProperty('_isAMomentObject') &&
      dateStringToConvert._isAMomentObject
        ? dateStringToConvert
        : moment(dateStringToConvert);
  }

  return dateStringToConvert;
}

/**
 * @function
 * Populate the initial state for the storage. This will allow the live updates for the Redux's localStorage.
 * If the state has more properties than the initialState then the those remaining properties will be removed from the state.
 * Otherwise, if the initialState has more properties than the state, then those properties will be added to the state.
 * @param {Object} state
 * The state of the store. It may come from the localStorage.
 * @param {Object} initialState
 * The initial values of the state in the store.
 */
export function initializeState(state, initialState) {
  if (state !== undefined && state !== null) {
    // Remove the properties not present in initialState
    let objectIntersected = objectIntersection(state, initialState);
    // This will merge the initial object on the saved state.
    // The second object will overwrite the values, this way we
    // can get the saved state values
    state = { ...initialState, ...objectIntersected };
  } else {
    state = initialState;
  }

  return state;
}
