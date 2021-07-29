import { v4 as uuidV4 } from 'uuid';
export function getUserTempId() {
  let userTempId = localStorage.getItem('userTempId_key');
  if (!userTempId) {
    userTempId = uuidV4();
    localStorage.setItem('userTempId_key', userTempId);
  }
  return userTempId;
}
