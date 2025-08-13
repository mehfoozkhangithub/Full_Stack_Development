const myfunc = async () => {

    let res = await fetch(`http://localhost:3000/user`)

    let data = await res.json()
    console.log('🚀 ~ data:', data);

}