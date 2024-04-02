import style from './Counter.module.css'
type PropsType = {
    value: number
    setValue: (value: number) => void
    startValue: number
    endValue: number
}
export const Counter = (props: PropsType) => {

    const increment = () => {
        props.setValue(props.value + 1)
    }

    const reset = () => {
        props.setValue(props.startValue)
    }

    const incorrectValue = props.startValue < 0 || props.startValue > props.endValue || (props.startValue === props.endValue && props.startValue > 0 && props.endValue > 0)
    const incrementDisabled = props.value === props.endValue || props.startValue === props.endValue
    const enterValue = props.startValue === 0 && props.endValue === 0

    return (
        <div className={style.container}>
            <div className={style.title}>Counter</div>
            <div className={style.content}>
                <div style={incorrectValue || enterValue ? { color: 'crimson' } : {}} className={style.counterDisplay}>
                    {
                        incorrectValue
                            ? <span>Incorrect value!</span>
                            : <span>{props.value}</span>
                                && enterValue
                                ? <span>Enter values and press 'Save'!</span>
                                : <span>{props.value}</span>
                    }
                </div>
                <div className={style.blockButtons}>
                    <button style={incrementDisabled || incorrectValue ? { borderColor: 'crimson' } : {}} className={style.button} onClick={increment} disabled={incorrectValue || incrementDisabled}>Increment</button>
                    <button style={incorrectValue || props.startValue === props.endValue ? { borderColor: 'crimson' } : {}} className={style.button} onClick={reset} disabled={incorrectValue}>Reset</button>
                    <button className={style.button}>Settings</button>
                </div>
            </div>
        </div>
    )
}
