import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export const Cadastro = () => {
  const [displayName, setDisplayNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setError('');

    const user = {
      displayName,
      email,
      password,
    }

    if (password !== confirmPassword) {
      setError('As senhas não conferem');
      return;
    }

    console.log('user', user);
  }

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar!</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input 
              type="text"
              name="displayName"
              placeholder="Nome do usuário"
              value={displayName}
              onChange={(event) => setDisplayNome(event.target.value)}
              required 
            />
          </label>

          <label>
            <span>Email:</span>
            <input 
              type="email"
              name="email"
              placeholder="Email do usuário"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required 
            />
          </label>

          <label>
            <span>Senha:</span>
            <input 
              type="password"
              name="password"
              placeholder="Insira sua senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required 
            />
          </label>

          <label>
            <span>Confirme sua senha:</span>
            <input 
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required 
            />
          </label>

          <button className='btn'>Cadastrar</button>

          {
            error && <p className='error'>{error}</p>
          }
        </form>
    </div>
  )
}
