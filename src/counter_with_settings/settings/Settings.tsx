import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { setCounterValue, setMaxValue, setStartValue } from '../../reducers/counter-with-settings-reducer'
import style from './Settings.module.css'

type PropsType = {
    counterValue: number | undefined
    startValue: number
    maxValue: number
}

export const Settings = (props: PropsType) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const saveSettingsToLocalStorage = () => {
        dispatch(setCounterValue(props.startValue))
        localStorage.setItem('startValue', JSON.stringify(props.startValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))

        if (props.startValue) {
            navigate("/counter-with-settings");
        }
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValue(+e.currentTarget.value))
    }
    const endValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValue(+e.currentTarget.value))
    }

    const saveDisabled = props.maxValue <= props.startValue || props.startValue < 0 || props.maxValue <= 0
    const incorrectValue = props.maxValue < props.startValue || props.startValue < 0 || props.maxValue < 0 || props.startValue === props.maxValue

    return (
        <div className={style.container}>
            <div className={style.title}>Settings</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>START:</span>
                        <input style={incorrectValue ? { borderColor: 'crimson' } : {}} type='number' value={props.startValue} onChange={startValueHandler} />
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>MAX:</span>
                        <input style={incorrectValue ? { borderColor: 'crimson' } : {}} type='number' value={props.maxValue} onChange={endValueHandler} />
                    </div>
                </div>
                <div className={style.blockButtons}>
                    <button style={saveDisabled ? { borderColor: 'crimson' } : {}} className={style.button} onClick={saveSettingsToLocalStorage} disabled={saveDisabled}>Save</button>
                    <button className={style.button}>
                        <NavLink className={style.link} to='/'>
                            Dashboard
                        </NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}
