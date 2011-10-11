var kinout_server = require('http').createServer(handler),
	io = require('socket.io').listen(kinout_server),
	port = 1980;

kinout_server.listen(port);

function handler(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World\n');
}

io.sockets.on('connection', function (socket) {
	console.log('Kinout server started at :' + port + '...');
	socket.emit('connected', { hello: 'world' });

	socket.on('navigate', function (data) {
		socket.broadcast.emit('push', data);
	});
});