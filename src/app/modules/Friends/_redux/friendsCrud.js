import axios from 'axios';

export const PRODUCTS_URL = process.env.REACT_APP_API_URL + '/v1/contact';

export const PRODUCTS1_URL = process.env.REACT_APP_API_URL + '/v1/user';

// CREATE =>  POST: add a new product to the server
export function createProduct(product) {
  return axios.post(PRODUCTS_URL, {product});
}

// READ
export function GetContacts(type) {
  console.log('GetContactsGetContacts')
  console.log(`${PRODUCTS_URL}/GetContacts?type=${type}`)
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
export function huyKetBan(id) {
  return axios.post(`${PRODUCTS_URL}/HandleContact`, {
    "id": id, 
    "status": 2
  });
}

export function dongYKetBan(id) {
  return axios.post(`${PRODUCTS_URL}/HandleContact`, {
    "id": id, 
    "status": 1
  });
}

export function KetBan(username) {
  return axios.post(`${PRODUCTS_URL}/CreateContact`, {
    "username": username
  });
}

export function timKienBanBe(key) {
  return axios.get(`${PRODUCTS1_URL}/ListUser?q=${key}`);
}

// DELETE Products by ids
export function deleteProducts(ids) {
  return axios.post(`${PRODUCTS_URL}/deleteProducts`, {ids});
}
