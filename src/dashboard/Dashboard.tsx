import { NavLink } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>
            <div>
                <NavLink to={'/counter-with-settings'}>COUNTER WITH SETTINGS</NavLink>
                <NavLink to={'/simple-counter'}>SIMPLE COUNTER</NavLink>
            </div>
        </div>
    );
};