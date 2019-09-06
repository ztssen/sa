import axios from "axios";
let httpAxios = axios.create({
        timeout: 2500
    })
    // 添加请求拦截器
httpAxios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    let newconfig = {...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    };
    return newconfig;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
httpAxios.interceptors.response.use(function(response) {
    console.log(response)
        // 对响应数据做点什么
        // let { code, token } = response.data;
        // if (code == 1) {
        //     return { code, token };
        // } else {
        //     alert("等哭失败")
        // }
        // return { code, token };
    return response.data;

}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default httpAxios;