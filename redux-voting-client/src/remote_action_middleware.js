
//A Redux middleware is a function that gets invoked when an action is dispatched, 
//before the action hits the reducer and the store itself.

//a function that takes a Redux store,
//and returns another function that takes a "next" callback. 
//That function returns a third function that takes a Redux action. 
//The innermost function is where the middleware implementation will actually go
export default socket => store => next => action => {
    //console.log('in middleware', action);
    if (action.meta && action.meta.remote) {
      socket.emit('action', action);
    }
    return next(action);
}