import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request1 = extend({
  errorHandler, // 默认错误处理

  credentials: 'include', // 默认请求是否带上cookie
});
//
// // request拦截器, 改变url 或 options.
// // @ts-ignore
// request1.interceptors.request.use(async (url, options) => {
//   const ctoken = localStorage.getItem('x-auth-token');
//   if (ctoken) {
//     const headers = {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'x-auth-token': ctoken,
//       'Access-Control-Allow-Origin': '*',
//     };
//     return (
//       {
//         url,
//         options: { ...options, headers },
//       }
//     );
//   }
//
//   const headers = {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     'x-auth-token': ctoken,
//     'Access-Control-Allow-Origin': '*',
//   };
//   return (
//     {
//       url,
//       options: { ...options },
//     }
//   );
// })
//
// // response拦截器, 处理response
// request1.interceptors.response.use((response, options) => {
//   const token = response.headers.get('x-auth-token');
//   // response.headers.append('Access-Control-Allow-Origin', '*');
//
//   if (token) {
//     localStorage.setItem('x-auth-token', token);
//   }
//   return response;
// });

// response拦截器, 处理response
request1.interceptors.response.use((response, options) => {
  response.headers.append('Access-Control-Allow-Origin', '*');
  return response;
});
export default request1;
