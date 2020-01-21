/* use node's http library to start an http server on port 3000 - http://localhost:3000
 inside the method used to start the server, create a loop from 1-20
 display this loop in a bulleted list using <ul> and <li> tags every time an http request is received
 */

// require the http library
let http = require('http');

// start the http server, listening for events on port 3000
http.createServer((request, response) => {

    // send ok http status code
    response.writeHead(200, { 'Content-Type': 'text/html'});

    // start the list
    response.write('<ul>');

    // create list items from 1-20
    for (let i = 1; i < 21; i++) {
        response.write('<li>' + i + '</li>');
    }

    // end the list
    response.write('</ul>');

    // complete the response to the browser
    response.end();

}).listen(3000);


