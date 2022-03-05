import axios from "axios";

let instance = axios.create({timeout:1000*12})
instance.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded'


if(process.env.NODE_ENV==='development'){
  instance.defaults.baseURL='/searchApi'
} else if(process.env.NODE_ENV==='production'){
  instance.defaults.baseURL='http://8.134.73.52:5000/searchApi/'
}
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