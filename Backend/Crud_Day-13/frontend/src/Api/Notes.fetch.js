import React from 'react'

const getData = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log("-> data:", data);
    } catch (error) {
        console.log("-> error:", error);

    }
}

export const Notesfetch = () => {

    const api = `http://localhost:8500/notes`

    React.useEffect(() => {
        getData(api)
    }, [])

    // hello
    return (
        <div>Notes_fetch</div>
    )
}
