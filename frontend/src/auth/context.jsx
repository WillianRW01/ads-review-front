import { createContext, useEffect, useState } from "react"
import {jwtDecode} from 'jwt-decode';


//verificar se o token é valido
const isValidarToken = (token) => {
    const decoded = jwtDecode(token)
    const currentTime = Date.now() / 1000
    return decoded.exp > currentTime
} 
// pegar a role do usuario 
const getRole = (token) => {
    const decoded = jwtDecode(token)
    return decoded.role
}
//exportar o context = react context 
export const AuthContext = createContext()

//exportar meu provider 
export const AuthProvider = ({children}) =>{
//token,role,loading

const [token,setToken] =  useState(null)
const [role,setRole] =  useState(null)
const [loading,Setloading] =  useState(true)

useEffect (() =>{
    const storageToken = localStorage.getItem('token')
    if(storageToken && isValidarToken(storageToken)){
        setToken(storageToken)
        setRole(getRole(storageToken))
    }else{
        setToken(null)
        setRole(null)
        localStorage.removeItem("token")
    }

    Setloading(false)
})
const login = (token) =>{
    setToken(token)
    setRole(getRole(token))
    localStorage.setItem('token',token)
}

const logout = () =>{
    setToken(null)
    setRole(null)
    Setloading(null)
    localStorage.removeItem('token')
}
if(loading){
    return <div>Loading...</div>
}

    return(
        <AuthContext.Provider value={{token, role , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}