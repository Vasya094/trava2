import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from "../actions/types";
import axios from "axios";

export const getItems = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then((res) =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  );
};
export const deleteItem = (id) => dispatch => {
  axios.delete( `/api/items/${ id }` ).then( res => {
    dispatch( {
      type: DELETE_ITEM,
      payload: id
    })
  })
}
export const addItem = ( name ) => dispatch => {
  debugger
  console.log(name)
  axios.post( '/api/items',{ name} ).then( res => dispatch( {
    type: ADD_ITEM,
    payload: res.data
  }))
}
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}