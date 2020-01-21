// include connect npm package
let connect = require('connect')

// create an instance of a connect object
let app = connect();

// create a hello world function to send an http response to any incoming request (i.e. fix "Cannot GET" error response)
// connect uses 3 params: req - HTTP Request, res - HTTP Response, next - if we want to do something after sending the response
let helloWorld = (req, res, next) => {
    res.writeHead(200);
    res.write('<h1>Hello World</h1>');
    res.end();
};

let goodbyeWorld = (req, res, next) => {
  res.writeHead(200);
  res.write('<h1>Goodbye World</h1>');
  res.end();
};

/*let notFound = (req, res, next) => {
  res.writeHead(404);  // return http status code 404 Not Found
  res.write('<h1>Page Not Found</h1>');
  res.end();
};*/

let index = (req, res, next) => {
    console.log(req.url);

    // if requested url is the root, show the home page
    if (req.url == '/') {
        res.writeHead(200);
        res.write('<h1>Connect Home Page</h1>');
        res.end();
    }
    else {
        // user has requested some url that doesn't exist, so return a 404 Not Found error
        res.writeHead(404);
        res.write('<h1>Page Not Found</h1>');
    }
    res.end();
};

// map requests to the path /hello to be handled by the helloWorld function
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.use('/', index); // must be last, or else it overrides ALL other paths
//app.use(notFound); // default request handler for any other url paths besides /hello & /goodbye

// start the web server on port 3000
app.listen(3000);

// display a message to the js console (optional)
console.log('Connect server running at http://localhost:3000');
