import { people, getById } from './db';

export default {
  Query: {
    people: () => people,
    person: id => getById(id)
  }
}
