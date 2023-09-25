import axios ,{AxiosError,type Method}from "axios";
// import { start } from "./nprogress";
import {Result} from '../src/model/index'
const baseUrl=import.meta.env.VITE_BASE_API;
const instance=axios.create({
    baseURL:baseUrl,
    timeout:10000
});

//请求拦截器
// instance.interceptors.request.use(
//     (config)=>{
//      start()
//      const userInfo=useUserStore()

//     }
// )
export const request=<T>(
    url:string,
    method:Method='GET',
    submitData?:object
){
    return instance.request<any,Result<T>>({
        url,method,[method.toUpperCase()==='GET'?'params':'data']:submitData
    })
}