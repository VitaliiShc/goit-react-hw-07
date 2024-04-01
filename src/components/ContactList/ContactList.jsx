import css from './ContactList.module.css';

import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import { selectVisibleContacts } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
