/* eslint-disable prettier/prettier */
import http from '../util/httpRequestService'
import AsyncStorage from '@react-native-community/async-storage'


class AuthService {

    async login(email, senha) {
        let res = await http.post('token', { email, senha });
        console.log(JSON.stringify(res));
        if (res.success)
            AsyncStorage.setItem("userContainer", JSON.stringify(res.data));

        return res.success;
    }

    async logout() {
        let res = await http.post('usuario/logout', {});
        console.log(JSON.stringify(res));
        if (res.success)
            AsyncStorage.removeItem("userContainer");

        return res.success;
    }

    async getUserContainer() {
        let res = await AsyncStorage.getItem("userContainer");
        return res != null ? JSON.parse(res) : null;
    }

    async getUserToken() {
        let userContainer = await this.getUserContainer();
        return userContainer != null ? userContainer.accessToken : null;
    }

    async setUserContainer(container) {
        if (container != null)
            await AsyncStorage.setItem("userContainer", JSON.stringify(container));
    }


}


export default new AuthService();