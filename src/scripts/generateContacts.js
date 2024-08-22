import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  const contacts = Array(number).fill(0).map(createFakeContact);
  console.log(contacts);
};

generateContacts(5);
