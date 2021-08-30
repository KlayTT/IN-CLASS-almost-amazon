import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR AUTHORS

const dbUrl = firebaseConfig.databaseURL;
// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuth = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then(resolve);
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
          getAuthors().then(resolve);
        });
    }).catch((error) => reject(error));
});
// UPDATE AUTHOR
const updateAuth = (authObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/Authors/${authObj.firebaseKey}.json`, authObj)
    .then(() => getAuthors().then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS
// GET SINGLE AUTH
const getOneAuth = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});
// FILTER AUTHORS
const favAuth = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getAuthors,
  createAuth,
  deleteAuth,
  favAuth,
  getOneAuth,
  updateAuth
};
