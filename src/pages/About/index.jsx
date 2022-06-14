import { Link } from 'react-router-dom';

import styles from './style.module.css';

export const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o React <span>Blog</span></h2>
        <p>O front-end é foi feito com o React, utilizando o firebase no backend para lidar com cadastro e login de usuários</p>
        <Link to='/posts/create' className='btn'>
          Criar Post        
        </Link>
    </div>
  )
}
