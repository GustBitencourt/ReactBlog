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
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>

        </nav>
  )
}
