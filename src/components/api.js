import axios from "axios";

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

function News(){
    return axios.get(`${BASE_URL}news/1.json`);
}

function Jobs(){
    return axios.get(`${BASE_URL}jobs/1.json`);
}

function Top(){
    return axios.get(`${BASE_URL}top/1.json`);
}

function Ask(){
    return axios.get(`${BASE_URL}ask/1.json`);
}

function Show(){
    return axios.get(`${BASE_URL}show/1.json`);
}

export {News, Jobs, Top, Ask, Show};