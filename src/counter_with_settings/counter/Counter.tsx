import { useDispatch } from 'react-redux'
import { setCounterValue } from '../../reducers/counter-with-settings-reducer'
import style from './Counter.module.css'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../store/store'

type PropsType = {
    counterValue: number | undefined
    startValue: number
    maxValue: number
}
export const Counter = (props: PropsType) => {

    const dispatch = useDispatch()
    const error = useSelector<AppStateType, string>(state => state.counterErrors.errors[0])

    const increment = () => {
        if (props.counterValue !== undefined) {
            dispatch(setCounterValue(props.counterValue + 1))
        }
    }

    const reset = () => {
        dispatch(setCounterValue(props.startValue))
    }

    // const incorrectValue = props.startValue < 0 || props.startValue > props.maxValue || (props.startValue === props.maxValue && props.startValue > 0 && props.maxValue > 0)
    // const incrementDisabled = props.counterValue === props.maxValue || props.startValue === props.maxValue
    // const enterValue = props.startValue === 0 && props.maxValue === 0
    const incorrectValue = false
    const incrementDisabled = props.counterValue === props.maxValue || props.startValue < 0 || props.startValue >= props.maxValue || !!error
    const enterValidValues = false
    const resetDisabled = (props.counterValue !== undefined && props.counterValue < props.maxValue) || !!error

    return (
        <div className={style.container}>
            <div className={style.title}>Counter</div>
            <div className={style.content}>
                <div style={error ? { color: 'crimson' } : {}}
                    className={style.counterDisplay}>
                    {
                        error
                            ? <span>{error}</span>
                            : <span>{props.counterValue}</span>
                    }
                    {/* {
                        incorrectValue
                            ? <span>Incorrect value!</span>
                            : <span>{props.counterValue}</span>
                                && enterValue
                                ? <span>Enter values and press 'Save'!</span>
                                : <span>{props.counterValue}</span>
                    } */}
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
                    <button className={style.button}>Settings</button>
                </div>
            </div>
        </div>
    )
}
