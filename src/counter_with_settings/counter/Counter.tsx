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

    const incorrectValue = props.startValue < 0 || props.startValue > props.endValue
    const incrementDisabled = props.value === props.endValue || props.startValue === props.endValue

    return (
        <div className={style.container}>
            <div className={style.title}>Counter</div>
            <div className={style.content}>
                <div style={incorrectValue ? { color: 'crimson' } : {}} className={style.counterDisplay}>
                    {
                        incorrectValue ? 'Incorrect value!' : props.value
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
