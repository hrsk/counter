
const initialState = {
    value: 0
}

export type InitialStateType = {
    value: number
}

export const simpleCounterReducer = (state = initialState, action: SetCounterValueActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_COUNTER_VALUE':
            return { ...state, value: action.value }
        default: return state
    }
}

type SetCounterValueActionType = ReturnType<typeof setCounterValue>

export const setCounterValue = (value: number) => {
    return {
        type: 'SET_COUNTER_VALUE',
        value,
    } as const
}
