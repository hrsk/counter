import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCounterValue, setMaxValue, setStartValue } from "../reducers/counter-with-settings-reducer"
import style from './CounterWithSettings.module.css'
import { Counter } from "./counter/Counter"
import { Settings } from "./settings/Settings"
import { setCounterError } from "../reducers/counter-errors-reducer"

type PropsType = {
    counterValue: number
    startValue: number
    maxValue: number
}

export const CounterWithSettings = (props: PropsType) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.startValue)
            localStorage.setItem('startValue', props.startValue.toLocaleString())
    }, [props.startValue])

    useEffect(() => {
        if (props.maxValue)
            localStorage.setItem('maxValue', props.maxValue.toLocaleString())
    }, [props.maxValue])

    useEffect(() => {
        const startValueFromLocalStorage = localStorage.getItem('startValue')
        const maxValueFromLocalStorage = localStorage.getItem('maxValue')

        dispatch(setStartValue(Number(startValueFromLocalStorage)))
        dispatch(setMaxValue(Number(maxValueFromLocalStorage)))

        dispatch(setCounterValue(Number(startValueFromLocalStorage)))

    }, [dispatch])


    useEffect(() => {
        // if (props.startValue && props.maxValue)
        //     if (props.startValue < 0 || props.startValue > props.maxValue || (props.startValue === props.maxValue)) {
        //         dispatch(setCounterError(['Input values is incorrect']));
        //     }
        if (props.startValue === 0 && props.maxValue === 0) {
            dispatch(setCounterError([`Enter values and press 'Save'!`]));
        }
        if (props.maxValue > props.startValue) {
            dispatch(setCounterError([]));
        }
    }, [props.startValue, props.maxValue, props.counterValue]);

    console.log(props.counterValue)

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
