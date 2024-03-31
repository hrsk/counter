import style from './Counter.module.css'

export const Counter = (props: any) => {

    const increment = () => {
        props.setValue(props.value + 1)
    }

    const decrement = () => {
        props.setValue(props.value - 1)
    }

    const decrementDisabled = props.value === 0
    const incrementDisabled = props.startValue === 0 || props.endValue === props.value

    return (
        <div className={style.container}>
            <div className={style.title}>Counter</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>{props.value}</div>
                <div className={style.blockButtons}>
                    <button style={incrementDisabled ? { borderColor: 'crimson' } : { borderColor: 'black' }} className={style.button} onClick={increment} disabled={incrementDisabled}>Increment</button>
                    <button className={style.button} onClick={decrement} disabled={decrementDisabled}>Decrement</button>
                    <button className={style.button}>Settings</button>
                </div>
            </div>
        </div>
    )
}