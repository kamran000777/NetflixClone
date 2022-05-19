import axios from "axios";

//creating a instance of base call which later can be used with different requests

const instance = axios.create({
      baseURL:"https://api.themoviedb.org/3"
});

export default instance;