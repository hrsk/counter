import { NavLink } from "react-router-dom";
import style from './Dashboard.module.css'

export const Dashboard = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>Dashboard</div>
            <div className={style.blockButtons}>
                <button className={style.button}>
                    <NavLink className={style.link} to={'/counter-with-settings'}>COUNTER WITH SETTINGS</NavLink>
                </button>
                <button className={style.button}>
                    <NavLink className={style.link} to={'/simple-counter'}>SIMPLE COUNTER</NavLink>
                </button>
            </div>
        </div>
    );
};
