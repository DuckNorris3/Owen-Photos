import axios from 'axios';

const getOneObject = (id, callback) => {
  axios.get(`/api/campsite?siteID=${id}`)
    .then(data => callback(data))
    .catch(err => console.log(err));
}

export default { getOneObject }