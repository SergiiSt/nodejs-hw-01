import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
  const data = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  return data;
};

console.log(await getAllContacts());
