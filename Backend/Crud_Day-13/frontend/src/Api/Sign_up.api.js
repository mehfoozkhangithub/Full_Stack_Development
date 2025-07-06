
export const Sign_up_api = async () => {

    const api = `http://localhost:8500/notes`

    try {
        let res = await fetch(api)
        let data = await res.json()
        console.log("-> data:", data);
    } catch (error) {
        console.log("-> error:", error);

    }
}
