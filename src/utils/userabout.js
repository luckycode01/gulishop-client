import { v4 as uuidv4 } from 'uuid';

export function getuserTempId() {
  let userTempId = localStorage.getItem('userTempId');
  if (!userTempId) {
    userTempId = uuidv4();
    localStorage.setItem('userTempId', userTempId);
  }
  return userTempId;
}
