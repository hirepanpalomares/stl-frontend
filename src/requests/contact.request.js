import 'axios';
import axios from 'axios';

const base_url = "http://localhost:3002/api";

export async function sendMessage(data) {
  //TODO Implement sending the files
  // let formData = new FormData()
  // formData.append('email', data.email);
  // formData.append('message', data.message);
  // formData.append('name', data.name);
  // formData.append('files', data.files);
  // console.log(formData); // it cannot be logged

  await axios({
    url: `${base_url}/contact`, 
    method: "POST",
    data: data
  })
    .then((res) => {
      // console.log(res.data);
      return "request succeded"
    })
    .catch(error => {
      // console.log(error);
      return "request error"
    })

}
