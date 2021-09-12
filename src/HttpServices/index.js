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
