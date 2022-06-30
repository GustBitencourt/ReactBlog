import { Link } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext";
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import styles from './styles.module.css'

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  //posts do usuario
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.lenght === 0 ? (
          <div className={styles.nopost}>
            <p>Nenhum post encontrado</p>
            <Link to='/posts/create' className="btn" >Criar um post</Link>
          </div>
        ) : (
          <>
            <div className={styles.post_header}>
              <span>Titulo</span>
              <span>Ações</span>                          
            </div>

            {posts && posts.map(post => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    Ver
                  </Link>
                  <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
                    Editar
                  </Link>
                  <button 
                    className="btn btn-outline btn-danger"
                    onClick={() => deleteDocument(post.id)}
                  >
                    Excluir
                  </button>
                </div>

              </div>
            ))}
          </>
        )}

    </div>
  )
}
