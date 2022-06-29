import { Link } from 'react-router-dom';

import { PostDetail } from '../../components/PostDetail';

//custom hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

import styles from './style.module.css';

export const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);
  return (
    <div className={styles.search_container}>
        <h2>Search</h2>
        <div>
            {posts && posts.length === 0 && (
                <div className={styles.nopost}>
                    <p>Nenhum post encontrado</p>
                    <Link to="/" className="btn btn-dark">Voltar para Home</Link>
                </div>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post} />
            ))}
        </div>
    </div>
  )
}
