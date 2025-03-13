console.log('Starting JSON Server...');
console.log('Path to db.json:', 'src/data/db.json');
const fs = require('fs');
const dbPath = 'src/data/db.json';
if (fs.existsSync(dbPath)) {
  console.log('db.json found at:', dbPath);
} else {
  console.error('db.json not found at:', dbPath);
}

// Correct the require statement
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/data/db.json'); 
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});