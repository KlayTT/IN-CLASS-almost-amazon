import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR AUTHORS

const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuth = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors(uid).then(resolve);
    })
    .catch(reject);
});
// CREATE AUTHOR
const createAuth = (authObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Authors.json`, authObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors(authObj.uid).then(resolve);
        });
    }).catch((error) => reject(error));
});
// UPDATE AUTHOR
const updateAuth = (authObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/Authors/${authObj.firebaseKey}.json`, authObj)
    .then(() => getAuthors(uid).then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS

// GET AUTH BOOKS
const getAuthBooks = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Books.json?orderBy="author_id"&equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((reject));
});
// GET SINGLE AUTH
const getOneAuth = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// FILTER AUTHORS
const favAuth = (userId) => new Promise((resolve, reject) => {
  getAuthors(userId)
    .then((userAuthArray) => {
      const trueFavAuth = userAuthArray.filter((auth) => auth.favorite);
      resolve(trueFavAuth);
    }).catch(reject);
});

export {
  getAuthors,
  createAuth,
  deleteAuth,
  favAuth,
  getOneAuth,
  updateAuth,
  getAuthBooks
};
