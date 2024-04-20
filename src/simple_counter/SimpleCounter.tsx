import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../store/store'
import style from './SimpleCounter.module.css'
import { setCounterValue } from '../reducers/simple-counter-reducer'

export const SimpleCounter = () => {

    const counterValue = useSelector<AppStateType, number>((state) => state.simpleCounter.value)
    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch(setCounterValue(counterValue + 1))
    }

    const decrementHandler = () => {
        dispatch(setCounterValue(counterValue - 1))
    }

    const disabled = counterValue === 0

    return (
        <div className={style.container}>
            <div className={style.title}>SIMPLE COUNTER</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>{counterValue}</div>
                <div className={style.blockButtons}>
                    <button className={style.button} onClick={incrementHandler}>INC</button>
                    <button style={disabled ? { borderColor: 'crimson' } : {}}
                        className={style.button}
                        onClick={decrementHandler}
                        disabled={disabled}>DEC</button>
                </div>
            </div>
        </div>
    )
}
