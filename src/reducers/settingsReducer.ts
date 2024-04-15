type InitialStateType = {
    value: number
    startValue: number
    endValue: number
}

const initialState = {
    value: 0,
    startValue: 0,
    endValue: 0,
}

export const settingsReducer = (state = initialState, action: SettingsReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_COUNTER_VALUE':
            return { ...state, value: action.value }
        default: return state
    }
}

//types
type SettingsReducerActionType = any

type SetCounterValueType = {
    type: 'SET_COUNTER_VALUE'
    value: number
}

export const setCounterValue = (value: number): SetCounterValueType => {
    return {
        type: 'SET_COUNTER_VALUE',
        value
    }
}
