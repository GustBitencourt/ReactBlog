import { NavLink } from 'react-router-dom';

import styles from './style.module.css';

export const Header = () => {
  return (
        <nav className={styles.navbar}>
            <NavLink className={styles.brand} to="/">
                React <span>Blog</span>
            </NavLink>

            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')} >About</NavLink>
                </li>
            </ul>

        </nav>
  )
}
