import { ChangeEvent } from 'react'
import style from './Settings.module.css'

type PropsType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    setStartValue: (value: number) => void
    endValue: number
    setEndValue: (value: number) => void
}

export const Settings = (props: PropsType) => {

    const saveSettings = () => {

        localStorage.setItem('startValue', props.startValue.toLocaleString())
        localStorage.setItem('endValue', props.endValue.toLocaleString())

        props.setValue(props.startValue)
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }
    const endValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEndValue(+e.currentTarget.value)
    }

    const saveDisabled = props.startValue < 0 || props.startValue >= props.endValue
    const incorrectValue = props.startValue < 0 || props.startValue > props.endValue

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
                        <input style={incorrectValue ? { borderColor: 'crimson' } : {}} type='number' value={props.endValue} onChange={endValueHandler} />
                    </div>
                </div>
                <div className={style.blockButtons}>
                    <button style={saveDisabled ? { borderColor: 'crimson' } : {}} className={style.button} onClick={saveSettings} disabled={saveDisabled}>Save</button>
                </div>
            </div>
        </div>
    )
}
