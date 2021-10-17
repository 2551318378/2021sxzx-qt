import axios from "axios";

const devUrl = 'http://localhost:5001' 
const testUrl = 'http://8.134.73.52:5001' 

let instance = axios.create({timeout:1000*12})
instance.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'

// if(process.env.NODE_ENV=='development'){
//   axios.defaults.baseURL = '/api'
// } else if(process.env.NODE_ENV == 'debug'){
//   axios.defaults.baseURL = '/api'
// } else if(process.env.NODE_ENV='production'){
//   axios.defaults.baseURL='http://api.123dailu.com'
// }
instance.defaults.baseURL= testUrl

instance.defaults.timeout = 10000

instance.interceptors.response.use(
  response=>{
    if(response.status === 200) {
      return Promise.resolve(response)
    } else{
      return Promise.reject(response)
    }
  },
  error =>{
    if(error.response.status){
      console.log('error');
      return Promise.reject(error.response)
    }
  }
)
export default instance