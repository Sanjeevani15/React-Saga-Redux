import * as types from "./actionTypes";

export const getContactsStart=()=>({
        type: types.GET_CONTACTS_START,
});


export const getContactsSuccess=(contacts)=>({
    type: types.GET_CONTACTS_SUCCESS,
    payload: contacts
});


export const getContactsFail=(error)=>({
    type: types.GET_CONTACTS_FAIL,
    payload: error
});


export const deleteContactsStart=(id)=>({
    type: types.DELETE_CONTACTS_START,
    payload:id
});


export const deleteContactsSuccess=()=>({
type: types.DELETE_CONTACTS_SUCCESS,
});


export const deleteContactsFail=(error)=>({
type: types.DELETE_CONTACTS_FAIL,
payload: error
});


export const addContactsStart=(contact)=>({
    type: types.ADD_CONTACTS_START,
    payload: contact
});


export const addContactsSuccess=()=>({
type: types.ADD_CONTACTS_SUCCESS,
});


export const addContactsFail=(error)=>({
type: types.ADD_CONTACTS_FAIL,
payload: error
});