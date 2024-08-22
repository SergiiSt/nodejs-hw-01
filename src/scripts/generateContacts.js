import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const contacts = await getAllContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  contacts.push(...newContacts);
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

generateContacts(5);
