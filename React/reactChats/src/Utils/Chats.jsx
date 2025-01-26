export const users = [{ id: 1, name: "Mehfooz" }, { id: 2, name: "Sanoor" }];


export const createConnection = (user) => {
    // consbole.log(`started lisening to`, user);
    let id;
    const listen = (callBack) => {
        id = setInterval(() => {
            let message = `new Message from ${user.name} at ${new Date().toTimeString()}`
            callBack(message)
        }, 1000);
    }
    const unsubscribe = () => {
        clearInterval(id)
    }
    return { listen, unsubscribe }
}