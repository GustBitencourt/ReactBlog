import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";


import styles from "./styles.module.css";

export const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tagsArray.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");

    //valida url da imagem
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL");
    }

    // cria o array de tags
    // separa as tags a partir de vírgula, e remove espaços em branco a partir do map e deixa em letras minusculas
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (!title || !image || !body || !tags) {
      setFormError("Preencha todos os campos");
    }

    //checar os valores
    if (formError) return;

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id, data);

    //redireciona para a home
    navigate("/dashboard");
  };

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Edite seu post: {post.title}</h2>
          <p>Faça as alterações necessárias!</p>
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
            <p className={styles.preview_title}>Preview da Imagem:</p>
            <img
              className={styles.image_preview}
              src={post.image}
              alt={post.title}
            />

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
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde...{" "}
              </button>
            )}

            {response.error && <p className="error">{response.error}</p>}
            {formError && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  );
};
