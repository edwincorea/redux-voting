export const setClientId = (clientId) => 
{
  return {
    type: 'SET_CLIENT_ID',
    clientId
  };
};

export const setConnectionState = (state, connected) => 
{
   return {
     type: 'SET_CONNECTION_STATE',
     state,
     connected
   };
};

export const setState = (state) => 
{
  return {
    type: 'SET_STATE',
    state
  };
};

export const vote = (entry) => 
{
  return {
    meta: {remote: true},
    type: 'VOTE',
    entry    
  };
};

export const next = () => 
{
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
};

export const restart = () => 
{
   return {
     meta: {remote: true},
     type: 'RESTART'
   };
};