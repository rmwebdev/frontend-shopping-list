import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_LOADING } from './types';

const url = "https://servershopping.herokuapp.com/";
export const  getItems = () => dispatch => {
    dispatch(setItemLoading());
    axios.get(url +'api/items').then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
    }));
}
export const  addItem = (item) => dispatch => {
   axios.post(url +'api/items', item).then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
   }));
}
export const  deleteItem = (id) => dispatch => {
    axios.delete(url +`api/items/${id}`).then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    }));
}
export const  setItemLoading = () => {
    return {
        type: ITEM_LOADING
    }
}