import {
    STATE_COUNTING,
    END_COUNTING,
} from './actionTypes';

export const startCounting = () => ({
    type: STATE_COUNTING,
});

export const endCounting = () => ({
    type: END_COUNTING,
});