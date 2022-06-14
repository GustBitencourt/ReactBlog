import { useState, useEffect } from 'react';

import { useAuthentication } from '../../hooks/useAuthentication';

import styles from './styles.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
        <p>Entre e mostre-se pro mundo!</p>
        <form onSubmit={handleSubmit}>
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

          {!loading && <button className='btn'>Login</button>}
          {loading && <button className='btn' disabled>Aguarde... </button>}


          {
            error && <p className='error'>{error}</p>
          }
        </form>
    </div>
  )
}
