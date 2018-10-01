import {
    START_COUNTING,
    END_COUNTING,
} from './'
export const emptyState = {
    isCounting: false,
}

export default function(state = emptyState, action) {
    switch(action.type) {

        case(START_COUNTING): {
            return {
                ...state,
                isCounting: true,
            }
        }

        case(END_COUNTING): {
            return {
                ...state,
                isCounting: false,
            }
        }

        default: {
            return state;
        }
    }

}