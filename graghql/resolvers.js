import { people, getById } from './db';

export default {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)
  }
}
