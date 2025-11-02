import React from "react";
import { createConnection, users } from "../Utils/Chats";
import { Contacts } from "../Components/Contacts";

export const ChatApp = () => {
    const [message, setMessage] = React.useState([]);
    const [subscribedTo, setSubscribedTo] = React.useState(users[1]);
    // console.log(subscribedTo, users, "this is in chatapp");

    React.useEffect(() => {
        let connection = createConnection(subscribedTo);
        connection.listen((newMessg) => {
            setMessage((prev) => [...prev, newMessg])
        })
        // cleanUp Function
        return () => {
            connection.unsubscribe()
            setMessage([])
        }
    }, [subscribedTo])

    return (
        <>
            <h1>Chat App</h1>
            <Contacts user={users} active={subscribedTo} onChange={(someUser) => setSubscribedTo(someUser)} />
            <hr />
            {
                message.map((el) => (
                    <li key={el}>
                        {el}
                    </li>
                ))
            }
        </>
    )
}