/**
 * Subfooter actions.
 * @module actions/getSubFooter
 */
export const GET_SUBFOOTER = 'GET_SUBFOOTER';

/**
 * Get SubFooter.
 * @function getSubFooter
 * @returns {Object} Get subfooter action.
 * Es: http://localhost:8080/Plone/@subfooter
 */
export function getSubFooter() {
  return {
    type: GET_SUBFOOTER,
    request: {
      op: 'get',
      path: '/@subfooter',
    },
  };
}
