import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Forms, Input, Label, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperations from 'redux/contacts/contacts-operations';
import getFilterContacts from 'redux/contacts/contacts-selectors';


export function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();
  const nameId = nanoid();
  const phoneId = nanoid();

  const isDublicate = contact => {
    const result = contacts.some(item => item.name === contact.name);
    return result;
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone: phone,
    };
    if (isDublicate(contact)) {
      return alert(`${contact.name} is already in Phonebook List`);
    }
    dispatch(contactsOperations.addContacts(contact));
    setName('');
    setPhone('');
  };
  return (
    <Forms onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor={phoneId}>
        Contact
        <Input
          id={phoneId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
        />
      </Label>

      <Button>Add Contact</Button>
    </Forms>
  );
}