import axios from "axios";

export default class HttpServices {
    constructor(path) {
        // this.path = "https://lawyered123.herokuapp.com/api/v1" + path;
        this.path = "http://localhost:8084/api/v1" + path;
    }

    async post(_data) {
        try {
            let { data } = await axios.post(this.path, _data, {
                withCredentials: true,
            });
            return data;
        } catch (error) {
            return { error: error.message };
        }
    }

    async get(_data) {
        try {
            let { data } = await axios.get(this.path, {
                withCredentials: true,
            });
            return data;
        } catch (error) {
            return { error: error.message };
        }
    }
}