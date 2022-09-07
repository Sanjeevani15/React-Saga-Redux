import * as types from "./actionTypes";

const initialState={
    contacts:{},
    error:null,
    loading: false,
};

const contactReducer=(state=initialState, action)=>{
    switch(action.type){
        case types.GET_CONTACTS_START:
        case types.DELETE_CONTACTS_START:
        case types.ADD_CONTACTS_START:
            return{
                ...state,
                loading:false              
            };
        case types.GET_CONTACTS_SUCCESS:
            return{
                ...state,
                contacts:action.payload,
                loading:false
            };
        case types.DELETE_CONTACTS_SUCCESS:
        case types.ADD_CONTACTS_SUCCESS:
            return{
                ...state,
                loading:false

            };
        case types.GET_CONTACTS_FAIL:
        case types.DELETE_CONTACTS_FAIL:
        case types.ADD_CONTACTS_FAIL:
            return{
                ...state,
                error:action.payload,
                loading:false
            }
         default :
         return state;
    }
}

export default contactReducer;