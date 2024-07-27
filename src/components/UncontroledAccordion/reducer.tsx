type actionType = {
    type: string
}

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

type StateType = {
    collapsed: boolean
}


export const reducer = (state: StateType, action: actionType): StateType => {

    switch (action.type) {
        case TOGGLE_CONSTANT:

            // const stateCopy = {
            //     ...state,
            //     collapsed: !state.collapsed
            // }
            // return stateCopy;

            return {
                ...state,
                collapsed: !state.collapsed
            }

        default:
            throw new Error(
                "Bad action type")
    }

    // if (action.type === TOGGLE_CONSTANT) {
    //     return !state
    // }
    //
    // return state
}