import net from 'net';

net
  .createServer((socket) => {
    console.log('Client connected');
    socket.write('Hello client');
    socket.on('data', () => socket.write('Ack'));
  })
  .listen(9000, 'localhost');
