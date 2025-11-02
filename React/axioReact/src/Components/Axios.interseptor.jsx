
// App.js
import { useEffect, useState } from "react";
import axios from "axios";

// ✅ Create Axios instance
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// ✅ Add Request Interceptor
api.interceptors.request.use(
    (config) => {
        console.log("📤 Request Sent:", config.url);

        // Add fake token
        config.headers.Authorization = "Bearer FAKE_TOKEN_123";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// ✅ Add Response Interceptor
api.interceptors.response.use(
    (response) => {
        console.log("📥 Response Received:", response.status);
        return response;
    },
    (error) => {
        console.error("❌ Error in Response:", error.response?.status);
        return Promise.reject(error);
    }
);

function Axios_Interseptor() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const res = await api.get("/posts?_limit=5"); // fetch first 5 posts
            setPosts(res.data);
        } catch (err) {
            console.error("Error fetching posts:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>🚀 Axios Interceptors Demo</h1>

            {loading && <p>Loading posts...</p>}

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <b>{post.title}</b>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Axios_Interseptor;

