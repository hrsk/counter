import style from './Counter.module.css'

export const Counter = (props: any) => {

    const increment = () => {
        props.setValue(props.value + 1)
    }

    const decrement = () => {
        props.setValue(props.value - 1)
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Counter</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>{props.value}</div>
                <div className={style.blockButtons}>
                    <button className={style.button} onClick={increment}>Increment</button>
                    <button className={style.button} onClick={decrement} disabled={props.value === 0}>Decrement</button>
                    <button className={style.button}>Settings</button>
                </div>
            </div>
        </div>
    )
}