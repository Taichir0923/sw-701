/* 
    http - GET, POST
    fs - create file
*/
// console.log('Hello!')
const fs = require('fs');
const http = require('http');

// fs.writeFileSync(
//     'index.html',
//     `<html>
//         <head>
//             <title>File sync</title>
//         </head>
//         <body>
//             <h1>Hello guys</h1>
//         </body>
//     </html>`
//  )

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>New tab</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send!</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === "POST"){
        fs.writeFileSync('message.txt', 'This is message content');
        res.statusCode = 302;
        res.setHeader('Location' , '/');
        return res.end();
    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Node Title</title></head>');
    res.write('<body><h1>Hello Guys!</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);