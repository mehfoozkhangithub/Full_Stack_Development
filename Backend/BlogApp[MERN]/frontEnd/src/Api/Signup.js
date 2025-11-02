
import axios from 'axios';


export const SignUP = async (base_url, data) => {
    try {
        let res = await axios.post(`${base_url}/signup`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}