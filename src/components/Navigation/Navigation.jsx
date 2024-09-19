import { NavLink } from 'react-router-dom'
import NavStyle from './Navigation.module.scss'

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink className={({ isActive }) => isActive ? NavStyle.active : ''} to="/date">BY DATE</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? NavStyle.active : ''} to="/">TODAY</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? NavStyle.active : ''} to="/about">ABOUT</NavLink></li>
            </ul>
        </nav>
    )
}