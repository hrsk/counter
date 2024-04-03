import { useDispatch } from "react-redux"
import { combineReducers, createStore } from "redux"
import { simpleCounterReducer } from "../reducers/simpleCounterReducer"

const rootReducer = combineReducers({
    simpleCounter: simpleCounterReducer,

})

export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof store.getState>

type ReducersType = typeof rootReducer

export type AppStateType = ReturnType<ReducersType>

export type AppDispatch = typeof store.dispatch | any

export const useAppDispatch: () => AppDispatch = useDispatch
