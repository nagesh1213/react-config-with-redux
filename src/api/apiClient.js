import api from "./restapi";

export async function getRequest(URL) {
  return await api.get(URL);
}

export async function postRequest(URL, payload) {
  return await api.post(URL, payload);
}

export async function patchRequest(URL, payload) {
  return await api.patch(URL, payload);
}

export async function deleteRequest(URL) {
  return await api.delete(URL);
}
