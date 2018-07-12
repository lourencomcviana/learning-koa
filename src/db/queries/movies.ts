import  knex from '../connection';

function getAllMovies() {
  return knex('movies')
  .select('*');
}

function getSingleMovie(id:string) {
  return knex('movies')
  .select('*')
  .where({ id: parseInt(id) });
}

function addMovie(movie:any) {
  return knex('movies')
  .insert(movie)
  .returning('*');
}
function updateMovie(id:string, movie:any) {
  return knex('movies')
  .update(movie)
  .where({ id: parseInt(id) })
  .returning('*');
}

function deleteMovie(id:string) {
  return knex('movies')
  .del()
  .where({ id: parseInt(id) })
  .returning('*');
}

export  {
  getAllMovies,
  getSingleMovie,
  addMovie,
  updateMovie,
  deleteMovie
};
