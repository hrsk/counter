import { Counter } from "./counter/Counter"
import { Settings } from "./settings/Settings"
import style from './CounterWithSettings.module.css'
import { useState } from "react"

export const CounterWithSettings = () => {

    const [value, setValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [endValue, setEndValue] = useState<number>(0)

    return (
        <div className={style.wrapper}>
            <Counter value={value} setValue={setValue} />
            <Settings startValue={startValue}
                setStartValue={setStartValue}
                endValue={endValue}
                setEndValue={setEndValue}
                setValue={setValue} />
        </div>
    )
}