import { Link } from 'react-router-dom'
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import styles from './styles.module.css'

export const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  //posts do usuario
  const posts = [];

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.lenght === 0 ? (
          <div>
            <p>Nenhum post encontrado</p>
            <Link to='/posts/create' className="btn" >Criar um post</Link>
          </div>
        ) : (
          <div>
            
          </div>
        )

        }
    </div>
  )
}
