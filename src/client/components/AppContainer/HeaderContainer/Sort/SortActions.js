import { ACTIONS } from 'constants';

export function sortBy(sortParam) {
    return {
        sortParam,
        type: ACTIONS.SORT_BY
    };
}
