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
    //have our clients emit 'action' events that we feed directly into our Redux store
    socket.on('action', store.dispatch.bind(store));
  });

  // A client sends an action to the server.
  // The server hands the action to the Redux Store.
  // The Store calls the reducer and the reducer executes the logic related to the action.
  // The Store updates its state based on the return value of the reducer.
  // The Store executes the listener function subscribed by the server.
  // The server emits a 'state' event.
  // All connected clients - including the one that initiated the original action - receive the new state.  

}