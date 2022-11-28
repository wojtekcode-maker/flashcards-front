import {createContext, useContext, useEffect, useState} from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import {auth} from "../config/firebase";

const UserContext = createContext<any>({})

export const AuthContextProvider = ({children}: any) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    return () => {
      unsubscibe()
    }
  }, [])

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    return signOut(auth);
  }
  return (
    <UserContext.Provider value={{ user, signIn, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext);
};