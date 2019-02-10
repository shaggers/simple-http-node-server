const fs = require('fs');
const http = require('http');
const port = 3000;

const appendFile = fs.appendFile('hello-world.txt', 'Hello to this great world', function (err) {
  if (err) throw err;
  console.log('Success');
});

const requestHandler = (request, response) => {
    response.end(appendFile);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
      return console.log(`You have an error:  ${err}`);
    }
  
    console.log(`server is listening on ${port}`);
});


