import { Counter } from "./counter/Counter"
import { Settings } from "./settings/Settings"
import style from './CounterWithSettings.module.css'
import { useEffect, useState } from "react"

type PropsType = {
    value: number
    startValue: number
    endValue: number
    setValue: (value: number) => void
    setStartValue: (value: number) => void
    setEndValue: (value: number) => void
}

export const CounterWithSettings = (props: PropsType) => {

    // const [value, setValue] = useState<number>(0)
    // const [startValue, setStartValue] = useState<number>(0)
    // const [endValue, setEndValue] = useState<number>(0)

    useEffect(() => {
        const startValueFromLocalStorage = Number(localStorage.getItem('startValue'))
        const endValueFromLocalStorage = localStorage.getItem('endValue')

        props.setStartValue(Number(startValueFromLocalStorage))
        props.setEndValue(Number(endValueFromLocalStorage))

        props.setValue(Number(startValueFromLocalStorage))

    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', props.startValue.toLocaleString())

    }, [props.startValue])

    useEffect(() => {
        localStorage.setItem('endValue', props.endValue.toLocaleString())

    }, [props.endValue])

    useEffect(() => {
    }, [props.value])

    return (
        <div className={style.wrapper}>
            <Counter value={props.value}
                setValue={props.setValue}
                startValue={props.startValue}
                endValue={props.endValue} />
            <Settings startValue={props.startValue}
                setStartValue={props.setStartValue}
                endValue={props.endValue}
                setEndValue={props.setEndValue}
                value={props.value}
                setValue={props.setValue} />
        </div>
    )
}
