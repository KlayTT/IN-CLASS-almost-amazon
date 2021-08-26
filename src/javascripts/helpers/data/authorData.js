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
// CREATE AUTHOR
// const createAuth = (authObj) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/Authors.json`, authObj)
//     .then((response) => {
//       const body = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/Authors/${response.data.name}.json`, body)
//         .then(() => {
//           getAuthors().then(resolve);
//         });
//     }).catch((error) => reject(error));
// });
// UPDATE AUTHOR
// SEARCH AUTHORS

export default getAuthors;
