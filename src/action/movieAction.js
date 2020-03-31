import { ADD_BTN, DELETE_BTN, EDIT_BTN, GET_KEYWORD , GET_RATING } from './type'

export const addBtn = movieAdd => {
    return {
        type: ADD_BTN,
        payload: movieAdd
    }
}
export const deleteBtn = id => {
    return {
        type: DELETE_BTN,
        payload: id
    }
}
export const edited = (newList, id) => {
    return {
        type: EDIT_BTN,
        payload: {
            newList,
            id
        }
    }
}
export const getKeyword = keyword => {
    return {
      type: GET_KEYWORD,
      payload: keyword
    };
  };
  export const getRating = rating => {
    return {
      type: GET_RATING,
      payload: rating
    };
  };
  