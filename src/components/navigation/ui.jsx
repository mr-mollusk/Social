import { Link } from "react-router-dom";
import s from "./style.module.scss";

const routes = [
    {
        to: "/profile",
        name: "Profile"
    },
    {
        to: "/messages",
        name: "Messages" 
    },
    {
        to: "/news",
        name: "News"
    },
    {
        to: "/music",
        name: "Music" 
    },
    {
        to: "/settings",
        name: "Settings"
    }
]

const NavigationUi = (props) => {
    return (
        <div className={s.nav}>
            {routes.map((route) => <Link key={route.name} to={route.to} className={s.nav_link}>{route.name}</Link>)}
        </div>
    )
}
export default NavigationUi;