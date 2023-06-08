import React, { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();

const baseUrl = "https://api.pokemontcg.io/v2/"

//Actions
const LOADING = 'LOADING';
const SEARCH = 'SEARCH';
const GET_ALL_SETS = 'GET_ALL_SETS';
const GET_CARDS_IN_SET = 'GET_CARDS_IN_SET'; 

//Reducer
const reducer = (state, action) => {
  switch(action.type){
    case LOADING:
      return{...state, loading: true}
    case GET_ALL_SETS:
      return {...state, sets: action.payload, loading: false}
    default:
    return state;
  }
}

export const GlobalContextProvider = ({children}) =>{
  const initialState = {
    sets: [],
    cardsInSet: [],
    isSearch: false,
    searchResults: [],
    isLoading: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllSets = async() => {
    dispatch(
      {type: LOADING}
      );
    const response = await fetch (`${baseUrl}/sets/`);
    const data = await response.json();
    dispatch(
      {type: GET_ALL_SETS, payload: data.data}
      );
  }

  

  
  useEffect(() => {
    getAllSets();
  }, []);
  
  return(
    <GlobalContext.Provider value={{...state,}}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(GlobalContext);
}