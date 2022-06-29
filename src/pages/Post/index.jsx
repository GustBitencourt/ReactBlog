import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

import styles from './style.module.css';


export const Post = () => {
    const { id } = useParams();
    const { document: post, loading, error } = useFetchDocument("posts", id);

  return (
    <div className={styles.post_container}>
        {loading && <p>Carregando...</p>}
        {post && (
            <>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.body}</p>
                <h3>Post sobre:</h3>
                <div className={styles.tags}>
                    {post.tagsArray.map((tag) => (
                        <p key={tag}>
                            <span>#</span>{tag}
                        </p>
                    ))}
                </div>
            </>
        )}
    </div>
  )
}
