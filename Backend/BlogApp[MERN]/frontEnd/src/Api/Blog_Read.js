
import axios from 'axios';


export const Blog_Read = async (url) => {
    try {
        let res = await axios.get(`${url}/note`);
        return res.data;
    } catch (error) {
        return error;
    }
}