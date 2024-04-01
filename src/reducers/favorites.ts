const favorites: string[] = [];

const favoritesReducer = (state = favorites, action: any) => {
  switch (action.type) {
    case "ADD_OR_REMOVE":
      return [...action.payload]
    default:
      return state;
  }
};

export default favoritesReducer;
