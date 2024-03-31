import style from './SimpleCounter.module.css'

export const SimpleCounter = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>COUNTER</div>
            <div className={style.content}>
                <div className={style.counterDisplay}>0</div>
                <div className={style.blockButtons}>
                    <button className={style.button}>INC</button>
                    <button className={style.button}>DEC</button>
                </div>
            </div>
        </div>
    )
}