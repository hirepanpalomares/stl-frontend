import axios from 'axios';


const base_url = process.env.REACT_APP_API_URL;

export async function sendMessage(data) {
  //TODO Implement sending the files
  // let formData = new FormData()
  // formData.append('email', data.email);
  // formData.append('message', data.message);
  // formData.append('name', data.name);
  // formData.append('files', data.files);
  // console.log(formData); // it cannot be logged

  await axios({
    url: `${base_url}/contact/message`, 
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

export async function sendInvestorsReq(data) {

  await axios({
    url: `${base_url}/contact/investors`, 
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

