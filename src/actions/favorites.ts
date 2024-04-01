export const addOrRemoveFavorite = (favoriteMovies: string[], movieId: string) => {
  if (favoriteMovies.includes(movieId)) {
    const favoriteIndex = favoriteMovies.findIndex(
      (favorite: string) => favorite === movieId
    );
    favoriteMovies.splice(favoriteIndex, 1);
    return {
      type: 'ADD_OR_REMOVE',
      payload: favoriteMovies,
    }
  }
  favoriteMovies.push(movieId);
  return {
    type: 'ADD_OR_REMOVE',
    payload: favoriteMovies,
  }
}