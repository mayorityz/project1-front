import axios from "axios";

export default class HttpServices {
  constructor(path) {
    this.path = "https://slum2school.herokuapp.com" + path;
    // this.path = "http://localhost:4500" + path;
  }

  async post(_data) {
    try {
      let { data } = await axios.post(this.path, _data);
      return data;
    } catch (error) {
      // return { error: error.message };
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      return { error: error.message };
    }
  }

  async get(_data) {
    try {
      let { data } = await axios.get(this.path);
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }
}
