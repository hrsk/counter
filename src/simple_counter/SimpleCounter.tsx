import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCounterValue } from '../reducers/simple-counter-reducer'
import style from './SimpleCounter.module.css'

type PropsType = {
    counterValue: number
}

export const SimpleCounter = (props: PropsType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const incrementHandler = () => {
        dispatch(setCounterValue(props.counterValue + 1))
        if (props.counterValue >= 10) {
            dispatch(setCounterValue(0))
            return navigate('/')
        }
    }

    const decrementHandler = () => {
        dispatch(setCounterValue(props.counterValue - 1))
    }

    const disabled = props.counterValue === 0

    return (
        <div className={style.container}>
            <div className={style.title}>SIMPLE COUNTER</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>{props.counterValue}</div>
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
