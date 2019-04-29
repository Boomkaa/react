import axios from 'axios';
const http = axios.create();

//这个地址要与的当前启动地址一致
http.defaults.baseURL = 'http://loaclhost:3000';
//网络连接十秒，如果页面没出来，则进行报错(网络异常，请稍后连接)
http.defaults.timeout = 10000;

//配置好了之后，发起请求时，返回的就直接是数据
http.interceptors.response.use(reponse => {
  return reponse.data;
})
