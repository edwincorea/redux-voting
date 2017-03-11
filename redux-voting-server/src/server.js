import Server from 'socket.io';

//Socket.io server
export default function startServer(store) {
  const io = new Server().attach(8090);

  //subscribe a listener to the store that reads the current state, 
  //turns it into a plain JavaScript object, 
  //and emits it as a state event on the Socket.io server.
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  //listen to 'connection' events on Socket.io server. We get one each time a client connects. 
  //In the event listener we can emit the current state right away.
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
  });

}