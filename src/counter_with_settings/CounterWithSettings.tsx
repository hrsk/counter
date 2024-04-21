import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { InitialStateType, setCounterValue, setMaxValue, setStartValue } from "../reducers/counter-with-settings-reducer"
import { AppStateType } from "../store/store"
import style from './CounterWithSettings.module.css'
import { Counter } from "./counter/Counter"
import { Settings } from "./settings/Settings"
import { setCounterError } from "../reducers/counter-errors-reducer"


export const CounterWithSettings = () => {

    const dispatch = useDispatch()
    const values = useSelector<AppStateType, InitialStateType>(state => state.counterWithSettings)

    // useEffect on first load page: check localstorage on presence of values and set

    const maxValueFromLocalStorage = () => {
        const valueAsString = localStorage.getItem("maxValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return values.maxValue
    }

    const startValueFromLocalStorage = () => {
        const valueAsString = localStorage.getItem("startValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return values.startValue
    }

    useEffect(() => {
        dispatch(setMaxValue(maxValueFromLocalStorage()))
        dispatch(setStartValue(startValueFromLocalStorage()))
        // dispatch(setCounterValue(startValueFromLocalStorage()))
    }, [])

    // useEffect errors 

    useEffect(() => {
        if (values.counterValue === undefined) {
            dispatch(setCounterError([`Enter values and press 'Save'!`]));
        }
        if (values.counterValue === undefined && values.startValue >= values.maxValue) {
            dispatch(setCounterError(['Input values is incorrect']));
        }
        if (values.counterValue === values.startValue) {
            dispatch(setCounterError([]));
        }
    }, [values.startValue, values.maxValue, values.counterValue]);

    return (
        <div className={style.wrapper}>
            <Counter counterValue={values.counterValue}
                startValue={values.startValue}
                maxValue={values.maxValue} />
            <Settings startValue={values.startValue}
                maxValue={values.maxValue}
                counterValue={values.counterValue}
            />
        </div>
    )
}
