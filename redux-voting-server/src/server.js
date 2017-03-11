import Server from 'socket.io';

//Socket.io server
export default function startServer() {
  const io = new Server().attach(8090);
}