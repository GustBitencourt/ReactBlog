import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

import { PostDetail } from '../../components/PostDetail';

import styles from './style.module.css';

export const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const { documents: posts, loading, error } = useFetchDocuments("posts") 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
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
          {loading && <p>Carregando...</p>}
          {posts && posts.map((post) => (
            <PostDetail key={post.id} post={post} />
          ))}
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
