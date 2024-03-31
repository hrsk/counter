import { ChangeEvent } from 'react'
import style from './Settings.module.css'

export const Settings = (props: any) => {

    const saveSettings = () => {
        props.setStartValue(props.startValue)
        props.setEndValue(props.endValue)
        props.setValue(props.startValue)
    }

    const resetSettings = () => {
        props.setStartValue(0)
        props.setEndValue(0)
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(+e.currentTarget.value)
    }
    const endValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setEndValue(+e.currentTarget.value)
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Settings</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>
                    <div>
                        <span>start:</span>
                        <input type='number' value={props.startValue} onChange={startValueHandler} />
                    </div>
                    <div>
                        <span>end:</span>
                        <input type='number' value={props.endValue} onChange={endValueHandler} />
                    </div>
                </div>
                <div className={style.blockButtons}>
                    <button className={style.button} onClick={saveSettings}>Save</button>
                    <button className={style.button} onClick={resetSettings}>Reset</button>
                </div>
            </div>
        </div>
    )
}