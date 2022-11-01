const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    const url =  req.url;
    if(url === '/products'){
        res.setHeader('Content-Type','application/json');
        const data = [
            {id: 1, name: "Product 1", price : 2000},
            {id: 2, name: "Product 2", price : 2000},
        ];
        res.end(JSON.stringify(data));
    }else if(url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Home Page</h1>")
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
})
const PORT = 8080
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})