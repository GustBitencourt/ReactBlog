import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import styles from './style.module.css';

export const Home = () => {
  const [query, setQuery] = useState('');
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.home}>
        <h1>Veja os posts recentes</h1>
        <form className={styles.search_form}>
            <input 
              type="text" 
              placeholder="Busque por tags" 
              name='query'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className='btn btn-dark'>Buscar</button>
        </form>

        <div>
          <h1>Posts..</h1>
          {posts && posts.length === 0 && (
            <div className={styles.nopost}>
              <p>Nenhum post encontrado</p>
              <Link to='/posts/create' className="btn">Crie o primeiro post</Link>
            </div>
          )}
        </div>
    </div>
  )
}
