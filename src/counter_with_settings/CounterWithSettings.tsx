import { Counter } from "./counter/Counter"
import { Settings } from "./settings/Settings"
import style from './CounterWithSettings.module.css'
import { useEffect, useState } from "react"

export const CounterWithSettings = () => {

    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(0)

    useEffect(() => {
        const startValueFromLocalStorage = Number(localStorage.getItem('startValue'))
        const endValueFromLocalStorage = localStorage.getItem('endValue')

        setStartValue(Number(startValueFromLocalStorage))
        setEndValue(Number(endValueFromLocalStorage))

        setValue(Number(startValueFromLocalStorage))

    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', startValue.toLocaleString())

    }, [startValue])

    useEffect(() => {
        localStorage.setItem('endValue', endValue.toLocaleString())

    }, [endValue])

    useEffect(() => {
    }, [value])

    return (
        <div className={style.wrapper}>
            <Counter value={value} setValue={setValue}
                startValue={startValue}
                endValue={endValue} />
            <Settings startValue={startValue}
                setStartValue={setStartValue}
                endValue={endValue}
                setEndValue={setEndValue}
                value={value}
                setValue={setValue} />
        </div>
    )
}
