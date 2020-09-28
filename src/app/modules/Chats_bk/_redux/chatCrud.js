import axios from 'axios';

export const PRODUCTS_URL = process.env.REACT_APP_API_URL + '/v1/message';

export function Conversations(gskip, pskip) {
  return axios.get(`${PRODUCTS_URL}/getConversations?gskip=${gskip}&pskip=${pskip}`);
}

export function Conversation(id, skip, limit) {
  return axios.get(`${PRODUCTS_URL}/${id}?skip=${skip}&limit=${limit}`);
}

export function createMessage(message) {
  return axios.post(`${PRODUCTS_URL}/createMessage`, message);
}

// CREATE =>  POST: add a new product to the server
export function createProduct(product) {
  return axios.post(PRODUCTS_URL, {product});
}

// READ
export function GetContacts(type) {
  console.log('GetContactsGetContacts');
  console.log(`${PRODUCTS_URL}/GetContacts?type=${type}`);
  return axios.get(`${PRODUCTS_URL}/GetContacts?type=${type}`);
}

export function getProductById(productId) {
  return axios.get(`${PRODUCTS_URL}/${productId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findProducts(queryParams) {
  return axios.post(`${PRODUCTS_URL}/find`, {queryParams});
}

// UPDATE => PUT: update the procuct on the server
export function updateProduct(product) {
  return axios.put(`${PRODUCTS_URL}/${product.id}`, {product});
}

// UPDATE Status
export function updateStatusForProducts(ids, status) {
  return axios.post(`${PRODUCTS_URL}/updateStatusForProducts`, {
    ids,
    status,
  });
}

// DELETE => delete the product from the server
export function huyKetBan(productId) {
  return axios.delete(`${PRODUCTS_URL}/${productId}`);
}

// DELETE Products by ids
export function deleteProducts(ids) {
  return axios.post(`${PRODUCTS_URL}/deleteProducts`, {ids});
}
