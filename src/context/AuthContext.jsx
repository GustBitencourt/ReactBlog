import { useContext, createContext } from 'react';

//contexto
const AuthContext = createContext();

//provider do contexto
export const AuthContextProvider = ({ children, value }) => {
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}

//uso do contexto
export const useAuthValue = () => {
    return useContext(AuthContext);
}