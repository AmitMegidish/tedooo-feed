import axios, { AxiosInstance } from "axios";
import { baseURL } from "./constants";

const instance: AxiosInstance = axios.create({
    baseURL
});

export default instance;