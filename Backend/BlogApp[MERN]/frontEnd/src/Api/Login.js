
import axios from 'axios';


export const Login_api = async (base_url, data) => {
    console.log('🚀 ~ data:', data);
    try {
        let res = await axios.post(`${base_url}/login`, data);
        console.log('🚀 ~ res:', res);
        return res;
    } catch (error) {
        return error;
    }
}