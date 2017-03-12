import uuid from 'uuid';

export const getClientId = () => {
  let id = localStorage.getItem('clientId');
  if (!id) {
    id = uuid.v4();
    localStorage.setItem('clientId', id);
  }
  return id;
};