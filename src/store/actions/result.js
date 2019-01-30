import * as actionTypes from './actionTypes';

export const storeResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res    
    }      
}

export const deleteResult = (res) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElementId: res
    }
}