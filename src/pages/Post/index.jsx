import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

import styles from './style.module.css';


export const Post = () => {
    const { id } = useParams();
    const { document: post, loading, error } = useFetchDocument("posts", id);

  return (
    <div>
        {loading && <p>Carregando...</p>}
        {post && (
            <h1>{post.title}</h1>
        )}
    </div>
  )
}
