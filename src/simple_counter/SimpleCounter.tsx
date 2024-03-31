import { useState } from 'react'
import style from './SimpleCounter.module.css'

export const SimpleCounter = () => {

    const [value, setValue] = useState<number>(0)

    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        setValue(value - 1)
    }

    return (
        <div className={style.container}>
            <div className={style.title}>COUNTER</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>{value}</div>
                <div className={style.blockButtons}>
                    <button className={style.button} onClick={increment}>INC</button>
                    <button className={style.button} onClick={decrement} disabled={value === 0}>DEC</button>
                </div>
            </div>
        </div>
    )
}