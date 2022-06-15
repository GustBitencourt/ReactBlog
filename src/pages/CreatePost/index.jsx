import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

import styles from './styles.module.css';

export const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState('');

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError('');

    //valida url da imagem
    try {
      new URL(image);
    } catch (error) {
      setFormError('A imagem precisa ser uma URL');
    }

    // cria o array de tags
    // separa as tags a partir de vírgula, e remove espaços em branco a partir do map e deixa em letras minusculas
    const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase());

    if(!title || !image || !body || !tags) {
      setFormError('Preencha todos os campos');
    }

    //checar os valores
    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    })

    //redireciona para a home
    navigate('/')

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
          {!response.loading && <button className='btn'>Postar</button>}
          {response.loading && <button className='btn' disabled>Aguarde... </button>}

          {response.error && <p className='error'>{response.error}</p>}
          {formError && <p className='error'>{formError}</p>}
        </form>
    </div>
  )
}
