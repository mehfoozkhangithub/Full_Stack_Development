// server.js
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const app = jsonServer.create();
const router = jsonServer.router('db.json');

// Set default middlewares (CORS, JSON)
app.use(cors());
app.use(cors({
    origin: ["http://127.0.0.1:5500", "http://localhost:3000", "*"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(jsonServer.defaults());

// Bind the router db to the app
app.db = router.db;

// Add authentication routes
app.use(auth);
app.use(router);

// Start server
app.listen(3000, () => {
    console.log('JSON Server is running on http://localhost:3000');
})