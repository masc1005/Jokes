import axios from 'axios' //importação da depedência axios


// dando todo o valor da api para a variavel api
const api = axios.create({ 
    baseURL: 'https://official-joke-api.appspot.com/jokes/random'
})


export default api //exportando variavel