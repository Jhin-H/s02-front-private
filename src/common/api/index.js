import axios from "axios";
import storage from "../lib/unit/storage";
import { authStore } from "../store/commonStore";

const instanceBaseUrl = 'rest/v1';

const accessToken = storage.get("access_token");
const refreshToken = storage.get("refresh_token");

const instance = axios.create({
    baseURL: instanceBaseUrl,
    timeout: 3000,
    withCredentials: true,
    Headers: {
        "Contents-Type": "application/json",
        "Authorization": ''
    },
});

// instance.interceptors.request.use(
//     config => {
//         //** accessToken토큰이 만료됐고, refreshToken만 유효하다면 accessToken갱신 시작 */
//         if(!valitateToken(accessToken) && valitateToken(refreshToken)) {
//             // refreshToken으로 갱신 시작

//         //** refreshToken까지 만료됐다면 세션 종료 */
//         } else if(!valitateToken(refreshToken)) {
//             storage.removeAll();
//             authStore.reset();
//             alert("세션이 만료됐습니다. 다시 로그인 해주세요.");
//             // 로그인 페이지로 이동
//         }

//         config.headers.Authorization = `Bearer ${accessToken}`;
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     }
// );

// instance.interceptors.response.use(
//     res => {
//         return res;
//     },
//     async err => {
//         const { config, response: { data } } = err;
//         const errCode = data.exceptionEnum.code;

//         if(errCode === "A002") {
//             const originalRequest = config;
//             const params = {
//                 "access-token": accessToken,
//                 "refresh-token": refreshToken,
//             }

//             const { data } = await instance.get("/auth/re-issue", { params: params });
//             if(data.status === 200) {
//                 const newAccessToken = data.data.accessToken;
//                 const newRefreshToken = data.data.refreshToken;

//                 storage.set("access_token", newAccessToken);
//                 storage.set("refresh_token", newRefreshToken);

//                 axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
//                 originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//                 return axios(originalRequest);
//             }
//         }
//         return Promise.reject(err);
//     }
// )



/**  url String ex) /S021100010/*/
export const API_GET = (targetUrl, params) => instance.get(
    targetUrl,
    { params }
);
export const API_POST = (targetUrl, body) => instance.post(
    targetUrl,
    body
);

// axios instance, interceptor