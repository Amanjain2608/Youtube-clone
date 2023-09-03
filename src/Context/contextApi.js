import React, {createContext, useState, useEffect, useCallback} from "react";
import {fetchDataFromApi} from "../utils/api";

const initialState = {
    loading: false,
    setLoading: () => {},
    searchResults: false,
    selectCategories: false,
    setSelectCategories: () => {},
    mobileMenu: false,
    setMobileMenu: () => {},
}

export const Context = createContext(initialState);

 export const AppContext = (props) =>{
     const [loading, setLoading] = useState(false);
     const [searchResults, setSearchResults] = useState([]);
     const [selectCategories, setSelectCategories] = useState(false);
     const [mobileMenu, setMobileMenu] = useState(false);

     useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
     },[selectCategories]);

     const fetchSelectedCategoryData = (query)=>{
          setLoading(true)
          fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResults(contents)
            setLoading(false);
          })
     }

     return(
        <Context.Provider value={{
            loading,
             setLoading,
             searchResults,
            // setSearchResults,
            setSelectCategories,
            selectCategories,
            mobileMenu,
            setMobileMenu
        }}>
            {props.children}
        </Context.Provider>
     )
}