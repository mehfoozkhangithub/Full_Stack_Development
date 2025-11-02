// App.js
import { useEffect, useState } from "react";
import axios from "axios";

function Axios_All() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // ✅ Run multiple API calls together.
        axios
            .all([
                axios.get("https://jsonplaceholder.typicode.com/users"),
                axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
            ])
            .then(
                axios.spread((usersRes, postsRes) => {
                    console.log("Users:", usersRes.data);
                    console.log("Posts:", postsRes.data);

                    setUsers(usersRes.data);
                    setPosts(postsRes.data);
                })
            )
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>🚀 Axios.all Demo</h1>

            <h2>Users</h2>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>

            <h2>Posts</h2>
            <ul>
                {posts.map((p) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Axios_All;

