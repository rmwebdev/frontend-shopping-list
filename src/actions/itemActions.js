import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions'

const url = "https://servershopping.herokuapp.com/";
// const url = "http://localhost:5000/";

export const  getItems = () => dispatch => {
    dispatch(setItemLoading());
    axios.get(url +'api/items').then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
    })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const  addItem = (item) => (dispatch, getState) => {
   axios.post(url +'api/items', item, tokenConfig(getState)).then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
   })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const  deleteItem = (id) => (dispatch, getState) => {
    axios.delete(url +`api/items/${id}`, tokenConfig(getState)).then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    })).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const  setItemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}