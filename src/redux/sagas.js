import {takeLatest,all,put,fork} from "redux-saga/effects";
import * as types from "./actionTypes";
import firebaseDb from "../firebase";
import { getContactsSuccess,getContactsFail, deleteContactsSuccess,deleteContactsFail,addContactsSuccess,addContactsFail } from "./actions";

function*  OnLoadContactAsync(){
    try{
        const contacts=yield new Promise((resolve)=>
            firebaseDb.child("contacts").on("value",resolve)
        );    
    if(contacts.val()!= null){
        yield put(getContactsSuccess(contacts.val()));
    }else{
        yield put(getContactsSuccess({}));
    }
 } catch(error){
    yield put(getContactsFail());
    }
}

function*  OnDeleteContactAsync({payload:id}){
    try{
        yield firebaseDb.child(`contacts/${id}`).remove();   
        yield put(deleteContactsSuccess()); 
 } catch(error){
    yield put(deleteContactsFail());
    }
}


function*  OnAddContactAsync({payload:contact}){
    try{
        yield firebaseDb.child(`contacts`).push(contact);   
        yield put(addContactsSuccess()); 
 } catch(error){
    yield put(addContactsFail());
    }
}

export function *OnLoadContact(){
    yield takeLatest(types.GET_CONTACTS_START,OnLoadContactAsync)
}
export function *OnDeleteContact(){
    yield takeLatest(types.DELETE_CONTACTS_START,OnDeleteContactAsync)
}
export function *OnAddContact(){
    yield takeLatest(types.ADD_CONTACTS_START,OnAddContactAsync)
}
const contactSagas=[fork(OnLoadContact),fork(OnDeleteContact),fork(OnAddContact)];
export default function* rootSaga(){
    yield all([...contactSagas]);
}