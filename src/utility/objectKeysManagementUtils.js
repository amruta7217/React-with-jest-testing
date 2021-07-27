/**
 * @function
 * Bound two objects to have exactly the same properties.
 * Returns a new object with the intersection of properties of two objects.
 * @param {Object} o1
 * @param {Object} o2
 * @returns Object
 */
export function objectIntersection(o1, o2) {
    let clonedObject = { ...o1 };
    Object.keys(clonedObject).forEach(function(item, index) {
      if (!o2.hasOwnProperty(item)) {
        delete clonedObject[item];
      }
    });
  
    return clonedObject;
  }
  
  // Sort object or dictionary
  export function sortObject(obj) {
    return Object.keys(obj)
      .sort()
      .reduce((x, k) => {
        x[k] = obj[k];
        return x;
      }, {});
  }
  
  /**
   * @function
   * Check if the object properties are null or empty
   * @param {Object} obj
   * Object which keys are going to be analyzed
   * @Return {Boolean} If none of the values are null or empty then the result will be true
   */
  export const checkObjectProperties = obj => {
    let isEmpty = true;
    if (obj) {
      isEmpty = Object.values(obj).some(prop => prop === null || prop === '');
    }
    return !isEmpty;
  };
  