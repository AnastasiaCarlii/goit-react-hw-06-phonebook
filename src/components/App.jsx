import { nanoid } from 'nanoid';

import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ContactList } from './ContactList/ContactList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  console.log('contacts:', contacts);

  const [filter, setFilter] = useState('');

  const formSubmitData = data => {
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === data.name.toLowerCase() ||
          contact.number === data.number
      )
    ) {
      return alert(
        `${data.name} or ${data.number} is already in your contacts`
      );
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    const addContactAction = {
      type: 'contacts/addContact',
      payload: newContact,
    };
    dispatch(addContactAction);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContacts = id => {
    const deleteContactAction = {
      type: 'contacts/deleteContact',
      payload: id,
    };
    dispatch(deleteContactAction);
    // setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitData} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <SearchFilter value={filter} onChange={changeFilter} />
      )}

      {filterContacts().length > 0 ? (
        <>
          {' '}
          <ContactList contacts={filterContacts()} onDelete={deleteContacts} />
        </>
      ) : (
        <p>you dont have contacts</p>
      )}
    </div>
  );
};
