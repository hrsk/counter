import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCounterValue, setMaxValue, setStartValue } from "../reducers/counter-with-settings-reducer"
import style from './CounterWithSettings.module.css'
import { Counter } from "./counter/Counter"
import { Settings } from "./settings/Settings"

type PropsType = {
    counterValue: number
    startValue: number
    maxValue: number
}

export const CounterWithSettings = (props: PropsType) => {

    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('startValue', props.startValue.toLocaleString())
    }, [props.startValue])

    useEffect(() => {
        localStorage.setItem('maxValue', props.maxValue.toLocaleString())
    }, [props.maxValue])

    useEffect(() => {
        const startValueFromLocalStorage = Number(localStorage.getItem('startValue'))
        const endValueFromLocalStorage = localStorage.getItem('maxValue')

        dispatch(setStartValue(Number(startValueFromLocalStorage)))
        dispatch(setMaxValue(Number(endValueFromLocalStorage)))

        dispatch(setCounterValue(Number(startValueFromLocalStorage)))

    }, [dispatch])

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
