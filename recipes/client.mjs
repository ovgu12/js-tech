import net from 'net';

const socket = net.connect(9000, 'localhost');
socket.on('data', (data) => {
  console.log('Server > ', data.toString());
});
socket.write('Hello');
