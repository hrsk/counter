
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

type SetCounterValueActionType = ReturnType<typeof setSimpleValue>

export const setSimpleValue = (value: number) => {
    return {
        type: 'SET_COUNTER_VALUE',
        value,
    } as const
}
