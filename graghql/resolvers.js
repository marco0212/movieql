import { getMovies, getById, addMovie } from './db';

export default {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score)
  }
}
