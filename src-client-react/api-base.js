import axios from "axios";

import { API_URL } from './configuration';

export const fetch = ({ url, params, authToken }) => {
  console.log(`API Call ${url} with params ${JSON.stringify(params)}`);
  return axios.get(API_URL + url, {
    params,
    headers: { Authorization: authToken, "Content-Type": "application/json" },
  });
};


export const remove = ({ url, params, authToken }) => {
  console.log(`API Call ${url} with params ${JSON.stringify(params)}`);
  return axios.delete(API_URL + url, {
    params,
    headers: { Authorization: authToken, "Content-Type": "application/json" },
  });
};


export const post = ({ url, formBody, authToken }) => {
  url = API_URL + url;
  return axios({
    method: "post",
    url: url,
    data: formBody,
    headers: {
      "Content-Type": "application/json",
      Authorization: !!authToken ? authToken : null,
    },
  });
};
