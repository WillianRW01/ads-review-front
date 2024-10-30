import axios from 'axios'

//criando a config  do axios 
//para o front conectar com o back :(
const api = axios.create({
 baseURL:'http://localhost:3000',
 timeout:10000,
})

api.interceptors.request.use(
    (config) => {
        // o localstorage vai ser basicamente um armazenamento de token 
        const token= localStorage.getItem('token')
        if(token){
            //passar ele no authorization da req
            config.headers.Authorization = token
        } 
        return config
    }
)


export default api;