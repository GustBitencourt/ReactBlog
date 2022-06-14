//bibliotecas
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

//contexto
import { AuthContextProvider } from "./context/authContext";

//custom hooks
import { useAuthentication } from './hooks/useAuthentication';

//pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { CreatePost } from './pages/CreatePost';
import { Dashboard } from './pages/Dashboard';

//components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">    
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Cadastro />} />
              <Route path="/posts/create" element={<CreatePost />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
