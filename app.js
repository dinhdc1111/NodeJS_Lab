const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        // console.log('HomePage');
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Home Page</h1>");
        res.end();
    }else if(url === '/products'){
        // console.log('Product Page');
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Products Page</h1>");
        res.end();
    }
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
