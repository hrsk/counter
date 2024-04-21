import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCounterError } from "../reducers/counter-errors-reducer"
import { setMaxValue, setStartValue } from "../reducers/counter-with-settings-reducer"
import style from './CounterWithSettings.module.css'
import { Counter } from "./counter/Counter"
import { Settings } from "./settings/Settings"

type PropsType = {
    counterValue: number | undefined
    startValue: number
    maxValue: number
}

export const CounterWithSettings = (props: PropsType) => {

    const dispatch = useDispatch()
    // const values = useSelector<AppStateType, InitialStateType>(state => state.counterWithSettings)

    // useEffect on first load page: check localstorage on presence of values and set

    const maxValueFromLocalStorage = () => {
        const valueAsString = localStorage.getItem("maxValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return props.maxValue
    }

    const startValueFromLocalStorage = () => {
        const valueAsString = localStorage.getItem("startValue");
        if (valueAsString) {
            return JSON.parse(valueAsString)
        } else return props.startValue
    }

    useEffect(() => {
        dispatch(setMaxValue(maxValueFromLocalStorage()))
        dispatch(setStartValue(startValueFromLocalStorage()))
        // dispatch(setCounterValue(startValueFromLocalStorage()))
    }, [])

    // useEffect errors 

    useEffect(() => {
        if (props.counterValue === undefined) {
            dispatch(setCounterError([`Enter values and press 'Save'!`]));
        }
        if (props.maxValue < props.startValue || props.startValue < 0 || props.maxValue < 0 || props.startValue === props.maxValue) {
            dispatch(setCounterError(['Input values is incorrect!']))
        }
        if (props.counterValue === props.startValue) {
            dispatch(setCounterError([]));
        }
    }, [props.startValue, props.maxValue, props.counterValue]);

    return (
        <div className={style.wrapper}>
            <Counter counterValue={props.counterValue}
                startValue={props.startValue}
                maxValue={props.maxValue} />
            <Settings startValue={props.startValue}
                maxValue={props.maxValue}
                counterValue={props.counterValue}
            />
        </div>
    )
}
