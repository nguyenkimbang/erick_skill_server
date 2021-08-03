export const REQUEST_FETCH_PRODUCTS = 'REQUEST_FETCH_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const DELETE_PRODUCTS_SUCCESS = 'DELETE_PRODUCTS_SUCCESS'

function requestFetchProducts() {
  return {
    type: REQUEST_FETCH_PRODUCTS
  }
}

function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json
  }
}

export function deleteProduct(productId) {
  console.log('delete/ hehe. call api here then dispatch store' + productId);
  // use axios call here then dispatch DELETE_PRODUCTS_SUCCESS
  return dispatch => {
    // asumme call api done after 3 seconds
    setTimeout(() => {
      dispatch({
        type: DELETE_PRODUCTS_SUCCESS,
        productId: productId
      })
    }, 3000);
  }
}

//second way
export function fetchProducts() {
  return dispatch => {
    dispatch(requestFetchProducts())
    // example request, use axios/fetch lib here
    return fetch({ store: 1, limit: 10, offset: 20 })
      //.then(response => response.json())
      //second way dispatcher
      .then(json => dispatch({
        type: RECEIVE_PRODUCTS,
        products: json
      }))
  }
}
