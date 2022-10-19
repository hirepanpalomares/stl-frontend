import axios from 'axios';

const base_url = process.env.REACT_APP_API_URL;

export async function createNewInterestedUser(data) {
  // console.log(data);
  await axios.post(`${base_url}/user`, data)
    .then((res) => {
      // console.log(res.data);
      return {
        status: "success"
      }
    })
    .catch(error => {
      // console.log(error.response);
      return {
        status: "error",
        error:  error.response
      }
    })

}

export async function validateNewInterestedUser(data) {
  console.log(data);
  await axios.patch(`${base_url}/user/confirm`, data)
    .then((res) => {
      // console.log(res.data);
      return {
        status: "success"
      }

    })
    .catch(error => {
      // console.log(error);
      return "request error"
    })

}
