import appConfig from '../app.json'
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob'
import { Alert } from 'react-native';


class HttpRequestService {

    constructor() { }

    apiUrl = appConfig.apiUrl;

    async getHeaders() {
        let res = await AsyncStorage.getItem("userContainer");
        let obj = JSON.parse(res);
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + (obj == null ? '' : obj.accessToken)
        }
    }

    async get(url) {
        let res = await fetch(this.apiUrl + url,
            {
                method: 'GET',
                headers: await this.getHeaders(),

            });

        return res.json();
    }

    async post(url, obj) {

        try {

            let res = await fetch(this.apiUrl + url, {
                method: 'POST',
                headers: await this.getHeaders(),
                body: JSON.stringify(obj)
            });

            if (res.ok)
                return res.json();


        } catch (err) {
            console.log(JSON.stringify(err.data))
            Alert.alert('', JSON.stringify(err));
            return {
                success: false,
                data: [JSON.stringify(err.data)]
            }
        }
    }
    async put(url, obj) {

        let res = await fetch(this.apiUrl + url, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(obj)
        });

        return res.json();
    }
    async delete(url, id) {

        let res = await fetch(`${this.apiUrl}${url}?id=${id}`, { method: 'DELETE', headers: this.getHeaders() });
        return res.json();
    }

    async downloadFileByUrl(url) {

        try {
            var date = new Date();
            var url = url;
            var ext = this.getExtention(url);
            ext = "." + ext[0];
            const { config, fs } = RNFetchBlob
            let PictureDir = fs.dirs.PictureDir
            let options = {
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: PictureDir + "/image_" + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
                    description: 'Image'
                }
            }

            await config(options).fetch('GET', url);
            return true;

        } catch {
            return false
        }

    }
    getExtention(filename) {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
    }

    //appConfig.apiUrl
}

export default new HttpRequestService()