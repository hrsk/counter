export type InitialStateType = {
    counterValue: number | undefined
    startValue: number
    maxValue: number
}

const initialState = {
    counterValue: undefined,
    startValue: 0,
    maxValue: 0,
}

export const counterWithSettingsReducer = (state = initialState, action: withSettingsReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_COUNTER_VALUE':
            return { ...state, counterValue: action.counterValue }
        case 'SET_START_VALUE':
            return { ...state, startValue: action.startValue }
        case 'SET_MAX_VALUE':
            return { ...state, maxValue: action.maxValue }

        default: return state
    }
}

//types
type withSettingsReducerActionType = SetCounterValueActionType | SetStartValueActionType | SetMaxValueActionType

type SetCounterValueActionType = ReturnType<typeof setCounterValue>
type SetStartValueActionType = ReturnType<typeof setStartValue>
type SetMaxValueActionType = ReturnType<typeof setMaxValue>

export const setCounterValue = (counterValue: number | undefined) => {
    return {
        type: 'SET_COUNTER_VALUE',
        counterValue
    } as const
}
export const setStartValue = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        startValue
    } as const
}
export const setMaxValue = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        maxValue
    } as const
}
