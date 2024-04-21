
type InitialStateType = {
    errors: string[]
}

const initialState: InitialStateType = {
    errors: []
}

export const counterErrorsReducer = (state = initialState, action: SetCounterErrorActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_COUNTER_ERROR':
            return { ...state, errors: action.error }
        default: return state
    }
}

type SetCounterErrorActionType = ReturnType<typeof setCounterError>

export const setCounterError = (error: string[]) => {
    return {
        type: 'SET_COUNTER_ERROR',
        error,
    } as const
}
