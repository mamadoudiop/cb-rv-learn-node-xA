const http = require('http');
const fs = require('fs');
const path = require('path');
const mLog = require('./modules/mLog');
const port = process.argv[2] || 8080;
const server = http.createServer((req,res) => {
  req.url = req.url == '/' ? 'index.html' : req.url;
  method = req.method;
  let data = '' ;

  if (method == 'GET' ){

  fs.createReadStream(path.join(__dirname, req.url), {flags: 'r'})
  .on('error', (err) => {
    let content = fs.readFileSync(path.join(__dirname, '404.html'));
    mLog.err(`${req.url} doesn't exist`);
    res.statusCode = 404;
    res.end(content);
  })
  .on('open',() => {;
  mLog.info(`${req.method} ${req.url}`);
})
  .pipe(res)
}

else if (method == 'POST' && req.url == '/add-session'){
    req.on('data', (chunk) => {
    data += chunk.toString();
  });
  res.on('end', (chunk) => {
    console.log(data);
  });
}
});

server.listen(port, (err) => {
  if (err) throw err;

  console.log("Server running on port " + port);
});
