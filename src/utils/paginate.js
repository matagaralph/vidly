import _ from 'lodash';

/**
 * paginates the data (items)
 * @param {Array} items 
 * @param {number} pageNumber 
 * @param {number} pageSize 
 * @return {Array} items (paginated data)
 */
export function paginate(items, pageNumber, pageSize) {
    /** getting the start index */
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
}