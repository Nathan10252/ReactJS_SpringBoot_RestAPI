import CountryStore from 'src/content/applications/Country/CountryStore';
import {createContext, useContext} from 'react';

export const store = {
    countryStore: new CountryStore(),
}

export const storeContext = createContext();

export function useStore(){
    return useContext(storeContext);
};