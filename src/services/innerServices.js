import { instance } from "./api";

export async function sendUserData(requestData) {
    try {
        const { data } = await instance({
            method: 'POST',
            url: process.env.NODE_ENV === 'development' ? 'http://localhost:9000' : 'https://bereginia-3e2cba262f15.herokuapp.com/',
            data: requestData
        });

        return data;
    } catch (e) {
        console.warn(e);
    }
}
