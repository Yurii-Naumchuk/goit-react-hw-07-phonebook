const getFilterContacts = state => {
  const { contacts, filter } = state;
  const normalizedFilter = filter.toLocaleLowerCase();
  if (!filter) {
    return contacts.items;
  }
  const filteredContact = contacts.items.filter(({ name }) => {
    const normalizedName = name.toLocaleLowerCase();
    const result = normalizedName.includes(normalizedFilter);
    return result;
  });
  return filteredContact;
};
export default getFilterContacts;
