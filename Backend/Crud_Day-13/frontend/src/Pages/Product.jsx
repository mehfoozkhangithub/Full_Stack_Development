import React, { useEffect } from 'react'


const getApi = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json()
        console.log('🚀 ~ data:', data);
    } catch (error) {
        console.log('🚀 ~ error:', error);

    }
}

export const Product = () => {
    const api = `http://localhost:8500/product`

    useEffect(() => {
        getApi(api)
    }, [])
    return (
        <>
            <h1>Product</h1>
        </>
    )
}
