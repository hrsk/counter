import { useDispatch } from 'react-redux'
import { setCounterValue } from '../../reducers/counter-with-settings-reducer'
import style from './Counter.module.css'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../store/store'
import { useNavigate } from 'react-router-dom'

type PropsType = {
    counterValue: number | undefined
    startValue: number
    maxValue: number
}
export const Counter = (props: PropsType) => {

    const dispatch = useDispatch()
    const error = useSelector<AppStateType, string>(state => state.counterErrors.errors[0])
    const navigate = useNavigate();


    const increment = () => {
        if (props.counterValue !== undefined) {
            dispatch(setCounterValue(props.counterValue + 1))
        }
    }

    const reset = () => {
        dispatch(setCounterValue(props.startValue))
    }

    const onClickSettingsHandler = () => {
        dispatch(setCounterValue(0));
        navigate('/settings')
    }

    const incorrectValue = props.maxValue < props.startValue || props.startValue < 0 || props.maxValue < 0 || props.startValue === props.maxValue
    const incrementDisabled = props.counterValue === props.maxValue || props.startValue < 0 || props.startValue >= props.maxValue || !!error
    const resetDisabled = (props.counterValue !== undefined && props.counterValue < props.maxValue) || !!error

    const counterValueIsMax = props.counterValue === props.maxValue

    return (
        <div className={style.container}>
            <div className={style.title}>Counter</div>
            <div className={style.content}>
                <div style={error ? { color: 'crimson' } : {}}
                    className={style.counterDisplay}>
                    {
                        error
                            ? <span>{error}</span>
                            : <span style={counterValueIsMax ? { color: 'crimson', fontWeight: 'bold' } : {} && { fontWeight: 'bold' }} >{props.counterValue}</span>
                    }
                </div>
                <div className={style.blockButtons}>
                    <button style={incrementDisabled || incorrectValue ? { borderColor: 'crimson' } : {}}
                        className={style.button}
                        onClick={increment}
                        disabled={incrementDisabled}>Increment</button>
                    <button style={resetDisabled ? { borderColor: 'crimson' } : {}}
                        className={style.button}
                        onClick={reset}
                        disabled={resetDisabled}>Reset</button>
                    <button className={style.button} onClick={onClickSettingsHandler}>Settings</button>
                </div>
            </div>
        </div>
    )
}
