import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const contacts = await getAllContacts();
  const newContact = createFakeContact();
  contacts.push(newContact);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

addOneContact();
