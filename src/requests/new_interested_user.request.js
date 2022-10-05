import 'axios';
import axios from 'axios';

const base_url = "http://localhost:3002/api";

export async function createNewInterestedUser(data) {
  console.log(data);
  await axios.post(`${base_url}/user`, data)
    .then((res) => {
      console.log(res.data);
      return "request succeded"
    })
    .catch(error => {
      console.log(error);
      return "request error"
    })

}

export async function validateNewInterestedUser(data) {
  console.log(data);
  await axios.patch(`${base_url}/user/confirm`, data)
    .then((res) => {
      console.log(res.data);
      return {
        status: "success"
      }

    })
    .catch(error => {
      console.log(error);
      return "request error"
    })

}
