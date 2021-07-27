import { LocalStorageKeys } from "../../../utility/storageUtils";

export const loadState = (preloadedStates = {}) => {
  try {
    const serializedState = localStorage.getItem(
      LocalStorageKeys.REDUX_LOCAL_STORAGE
    );
    if (serializedState === undefined || serializedState === null) {
      return undefined;
    }

    let jsonSerializedState = JSON.parse(serializedState);

    for (let key in preloadedStates) {
      let [stateName, stateProperty] = key.split(".");
      jsonSerializedState[stateName][stateProperty] = preloadedStates[key];
    }

    return jsonSerializedState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LocalStorageKeys.REDUX_LOCAL_STORAGE, serializedState);
  } catch {
    // ignore write errors
    return null;
  }
};

export const deleteState = () => {
  try {
    localStorage.removeItem(LocalStorageKeys.REDUX_LOCAL_STORAGE);
  } catch (err) {
    return null;
  }
};
