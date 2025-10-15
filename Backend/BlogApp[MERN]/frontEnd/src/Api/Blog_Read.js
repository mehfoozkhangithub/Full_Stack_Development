
import axios from 'axios';


export const Blog_Read_Api = async (base_url, token) => {

    try {
        let res = await axios.get(`${base_url}/notes`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res;
    } catch (error) {
        return error;
    }
}