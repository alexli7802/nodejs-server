
var express = require('express');
var sevrApp = express();

sevrApp.use(express.static('public'))

sevrApp.get('/', (req, resp) => {
  resp.type('.html');
  resp.sendFile("/home/ali/gitlab/cellos_webserver/views/index.html");
})


sevrApp.listen(8283, ()=> console.log('na-server starts now, port=8283'));
