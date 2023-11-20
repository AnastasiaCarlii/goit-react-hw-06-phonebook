import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.listItem}>
      <span className={css.contactItem}>
        {name}:{number}
      </span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};
