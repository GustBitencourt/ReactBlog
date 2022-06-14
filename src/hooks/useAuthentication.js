import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  /* Clean up, lida com o memory leak, evitando ações quando o componente não estiver ná página */
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  //lida com o memory leak
  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //função que cria usuário
  const createUser = async (data) => {
    checkIfIsCancelled();
    setError(null);
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);
      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa ter no mínimo 6 caracteres";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado";
      } else {
        systemErrorMessage = "Ocorreu algum erro, tente mais tarde";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  //logout
  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  }

  //coloca o cancelled como true assim que sair da pagina - evitando memory leak
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
  };
};
