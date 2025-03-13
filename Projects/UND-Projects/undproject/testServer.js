// testServer.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({ posts: [] });
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});
