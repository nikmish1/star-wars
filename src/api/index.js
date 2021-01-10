import Storage from "../services/StorageService";

const request = async ({ url, data = null, method = "GET", cache = false }) => {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;
  let requestData = {
    method: method,
    headers: {},
  };
  if (cache) {
    const response = Storage.get(url);
    if (response) return response;
  }

  if (data) {
    requestData.headers = {
      "Content-Type": "application/json",
    };
    requestData.body = JSON.stringify(data);
  }
  let response = await fetch(`${BASE_URL}` + url, requestData);
  let responseJson = await response.json();
  if (cache) {
    Storage.set(url, responseJson);
  }
  return responseJson;
};

export default request;
