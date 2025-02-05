import * as types from './actionTypes'

export const removeFeature = item => {
    // dispatch an action here to remove an item
    return {
        type: types.REMOVE_FEATURE,
        payload: item
    }
  };

export const buyItem = item => {
    // dipsatch an action here to add an item
    return {
        type: types.ADD_ITEM,
        payload: item
    }
  }