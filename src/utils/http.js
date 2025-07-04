import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API || '',
    timeout: 5000,    // 请求超时时间
    withCredentials: false,
    // 创建axios实例 
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Token': '7d05e821a96d438bbdc982b9507eeb37|211642'
    }
})

axiosInstance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么
        // console.log("config", config)
        return config
    },
    error => {
        // 对请求错误做些什么
        console.error("error", error)
        return Promise.reject(error)
    }
)
// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
   return handleStatusCode(response)
}, function (error) {
    return Promise.reject(error);
});

const handleStatusCode = (response) => { 

    let status = response.status;
    let result;
    switch (status) {
        case 200:
            result =  response.data;
            break; 
        //提示 没有权限的 message
        case 400:  
        case 401:  
        case 403: 
        case 404:
            result= Promise.reject(response.data);
                break;
        case 500:
            result= Promise.reject(response.data);
                break;
        default:
            result= Promise.reject(response.data);
                break;
    }
    return result;
}



// 添加中间层 修改请求headers， 处理不同的 数据  文件 blob/buffer/stream 等
const http = (method, url, data,type) => {
    // if(type=='xxx'){
    //     axiosInstance.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // }
    return new Promise((resolve, reject) => {
        axiosInstance({
            method: method,
            url: url,
            data: data,
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export default http
