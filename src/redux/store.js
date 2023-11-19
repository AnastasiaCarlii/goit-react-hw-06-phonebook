import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contacts/contacts.reducer';

const rootReducer = combineReducers({
  contactsStore: contactsReducer,
});

export const store = createStore(rootReducer);
