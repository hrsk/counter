import { useState } from 'react'
import style from './SimpleCounter.module.css'
import { useSelector } from 'react-redux'
import { AppStateType } from '../store/store'
import { decrement, increment } from '../reducers/simpleCounterReducer'
import { useDispatch } from 'react-redux'

export const SimpleCounter = () => {

    const counterValue = useSelector<AppStateType, number>((state) => state.simpleCounter.value)
    const dispatch = useDispatch()

    // const [value, setValue] = useState<number>(0)

    const incrementHandler = () => {
        dispatch(increment(counterValue + 1))
        // setValue(value + 1)
    }

    const decrementHandler = () => {
        dispatch(decrement(counterValue - 1))
        // setValue(value - 1)
    }

    return (
        <div className={style.container}>
            <div className={style.title}>COUNTER</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>{counterValue}</div>
                <div className={style.blockButtons}>
                    <button className={style.button} onClick={incrementHandler}>INC</button>
                    <button className={style.button} onClick={decrementHandler} disabled={counterValue === 0}>DEC</button>
                </div>
            </div>
        </div>
    )
}