import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setCounterValue, setMaxValue, setStartValue } from '../../reducers/counter-with-settings-reducer'
import style from './Settings.module.css'

type PropsType = {
    counterValue: number
    // setValue: (value: number) => void
    startValue: number
    // setStartValue: (value: number) => void
    maxValue: number
    // setEndValue: (value: number) => void
}

export const Settings = (props: PropsType) => {

    const dispatch = useDispatch()

    const saveSettings = () => {
        dispatch(setCounterValue(props.startValue))
        // props.setValue(props.startValue)
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValue(+e.currentTarget.value))
    }
    const endValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValue(+e.currentTarget.value))
    }

    const saveDisabled = props.startValue < 0 || props.startValue >= props.maxValue
    const incorrectValue = props.startValue < 0 || props.startValue > props.maxValue

    return (
        <div className={style.container}>
            <div className={style.title}>Settings</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>
                    <div>
                        <span>start:</span>
                        <input style={incorrectValue ? { borderColor: 'crimson' } : {}} type='number' value={props.startValue} onChange={startValueHandler} />
                    </div>
                    <div>
                        <span>end:</span>
                        <input style={incorrectValue ? { borderColor: 'crimson' } : {}} type='number' value={props.maxValue} onChange={endValueHandler} />
                    </div>
                </div>
                <div className={style.blockButtons}>
                    <button style={saveDisabled ? { borderColor: 'crimson' } : {}} className={style.button} onClick={saveSettings} disabled={saveDisabled}>Save</button>
                </div>
            </div>
        </div>
    )
}
