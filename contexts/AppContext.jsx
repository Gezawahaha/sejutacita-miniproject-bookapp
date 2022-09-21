import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import AppReducer, { initialState } from './AppReducer';

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('favorited-book'))) {
      // checking if there already is a state in localstorage
      dispatch({
        type: 'ADD_TO_FAVORITE',
        payload: {
          favArray: JSON.parse(localStorage.getItem('favorited-book')),
        },
        // if yes, update the current state with the stored one
      });
    }
  }, []);

  const addToFavorite = (fav) => {
    const updatedFav = state.favArray.concat(fav);
    localStorage.setItem('favorited-book', JSON.stringify(updatedFav));
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: {
        favArray: updatedFav,
      },
    });
  };

  const removeFavorite = (fav) => {
    const updatedFav = state.favArray.filter(
      (currentFav) => currentFav.id !== fav.id
    );
    localStorage.setItem('favorited-jobs', JSON.stringify(updatedFav));

    dispatch({
      type: 'REMOVE_FROM_FAVORITE',
      payload: {
        favArray: updatedFav,
      },
    });
  };

  const value = useMemo(() => ({
    favArray: state.favArray,
    addToFavorite,
    removeFavorite,
  }));

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// custom hook
const useFav = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('Error');
  }
  return context;
};

export default useFav;
