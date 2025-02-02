const http = require('http');
const url = require('url');
const PORT = process.env.PORT || 8000;
const EMAIL = 'brightobiyom2@gmail.com';
const GITHUB_URL = 'https://github.com/ObiyomBright/HNG-Backend-Stack-0.git';

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/' && req.method === 'GET') {
        const response = {
            email: EMAIL,
            current_datetime: new Date().toISOString(),
            github_url: GITHUB_URL
        };

        res.writeHead(200, {
            'Content-Type': 'application/json',
            'access-control-allow-origin': '*'
        });
        res.end(JSON.stringify(response)); 
    } else {
        res.writeHead(404, {
            'content-type': 'application/json'
        });
        res.end(JSON.stringify({ error: 'Page not found'}))
    }
})

server.listen(PORT, ()=> {
    console.log(`Server is currently running on ${PORT}`);
});