export const DEFAULT_ERROR_MESSAGE =
  'Something went wrong. Try again in a few minutes.';

/**
 * Gives the formatted error message.
 * @param {any} message - Actual error message
 * @return {String} Formatted error message.
 */
export const getErrorMessage = (error = null, usePrefix = false) => {
  if (!usePrefix) {
    return error?.message || DEFAULT_ERROR_MESSAGE;
  }

  return `Oops, ${error?.message || DEFAULT_ERROR_MESSAGE}`;
};
