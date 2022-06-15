import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

import styles from './styles.module.css';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className={styles.create_post}>
        <h2>Crie seu post</h2>
        <p>Mostre o que quiser!</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input 
              type="text"
              name="title"
              placeholder="Pense num bom título"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </label>

          <label>
            <span>Imagem:</span>
            <input 
              type="text"
              name="image"
              placeholder="Pense em uma Imagem que reflita seu post"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
            />
          </label>

          <label>
            <span>Conteúdo:</span>
            <textarea
              name="body"
              required
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="Insira o conteúdo do post"
            ></textarea>
          </label>

          <label>
            <span>Tags:</span>
            <input 
              type="text"
              name="image"
              placeholder="Insira as tags separadas por vírgulas"
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              required
            />
          </label>
          <button className='btn'>Postar</button>
          {/* {!loading && <button className='btn'>Postar</button>}
          {loading && <button className='btn' disabled>Aguarde... </button>}

          {error && <p className='error'>{error}</p>} */}
        </form>
    </div>
  )
}
