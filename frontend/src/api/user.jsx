import api from './api'
// defau serve para uma unica coisa se for mais do que uma não precisa 
//user sera um objeto como {nome,email,senha} fds 
 export const createUser = async (user) =>{
    const response = await api.post('/api/v1/user',user)

    console.log(response)
    return response.data
}

export const loginUser = async(email,senha) =>{
    const reponse = await api.post('/api/v1/login',{email,senha})
    console.log(reponse)
    return reponse.data
}

export const getContext = async () =>{
const response = await api.get('./api/v1/user/context')
console.log(response)
return response.data
}
//user sera um objeto como {nome,email,senha} fds 
export const UpdateUser = async(id,user) => {
const response = await api.put(`api/v1/user/${id}`,user)
console.log(response)
return response.data
}

export const DeleteUser = async(id) => {
    return api.delete(`api/v1/user/${id}`)     
}
