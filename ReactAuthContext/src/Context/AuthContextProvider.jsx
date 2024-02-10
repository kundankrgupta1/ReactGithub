import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");



  return (

    <AuthContext.Provider value={{isAuth, setIsAuth, token, setToken}}>
      {children}
    </AuthContext.Provider>
  )
}
