
const initialState = {
    value: 0
}

type InitialStateType = {
    value: number
}

export const simpleCounterReducer = (state = initialState, action: CounterReducerActionType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: action.value }
        case 'DECREMENT':
            return { ...state, value: action.value }
        default: return state
    }
}

type CounterReducerActionType = IncrementActionType | DecrementCounterActionType

type IncrementActionType = {
    type: 'INCREMENT'
    value: number
}

type DecrementCounterActionType = {
    type: 'DECREMENT'
    value: number
}

export const increment = (value: number): IncrementActionType => {
    return {
        type: 'INCREMENT',
        value,
    }
}

export const decrement = (value: number): DecrementCounterActionType => {
    return {
        type: 'DECREMENT',
        value,
    }
}
