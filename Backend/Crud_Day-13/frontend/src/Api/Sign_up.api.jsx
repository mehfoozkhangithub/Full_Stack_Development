import { useEffect } from "react";
import { useSelector } from "react-redux";


const getApiData = async (api, datas) => {
    try {
        let res = await fetch(api, {
            method: "POST",
            body: JSON.stringify(datas),
            headers: {
                'Content-type': 'application/json',
            },
        });
        let data = await res.json();
        console.log('🚀 ~ data:', data);

    } catch (error) {
        console.log("-> error:", error);

    }
}

export const Sign_up_api = () => {

    const data = useSelector((state) => state.sign)


    console.log('🚀 ~ data:', data);

    const api = `http://localhost:8500/signup`


    useEffect(() => {
        getApiData(api, data)
    })

}
