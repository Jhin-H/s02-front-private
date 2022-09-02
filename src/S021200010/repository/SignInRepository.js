import { API_GET } from "../../common/api";
import storage from "../../common/lib/unit/storage";
import { authStore } from "../../common/store/commonStore";

const BASE_URL = "/s021200010";

export const API_SIGN_IN = async(params) => {
    try {
        const { data: { data } } = await API_GET(BASE_URL + '/sign-in', params);
        authStore.setAuthenticated(data);

        storage.set('access_token', data.accessToken);
        storage.set('refresh_token', data.refreshToken)
        storage.set('user_info', data);
        
        return true;
    } catch(e) {
        console.log(e);
    }
    
}