import { makeObservable, makeAutoObservable } from 'mobx';
import { toast } from 'react-toastify';

import {
  getCountryById,
  createCountry,
  deleteAllCountry,
  deleteCountry,
  getAllCountry,
  pagingCountry,
  updateCountry,
}
  from './CountryService';

export default class CountryStore {
  selectedCountry = null;
  listCountries = [];

  constructor() {
    makeAutoObservable(this);
  }

  createCountry = async country => {
    return await createCountry(country)
      .then((data) => {
        toast.success("Save country successfully!");
      })
      .catch(error => {
        console.error(error);
        toast.error("Save country fail");
      });
  }

  updateCountry = async country => {
    return await updateCountry(country)
      .then((data) => {
        toast.success("Save country successfully!");
      })
      .catch(error => {
        console.error(error);
        toast.error("Save country fail");
      });
  }

  getCountryById = async countryId => {
    return await getCountryById(countryId)
      .then((data) => {
        this.selectedCountry = data;
      })
      .catch(error => {
        console.error(error);
        toast.error("Get data fail");
      })
  }

  getAllCountry = async () => {
    return await getAllCountry()
      .then((data) => {
        this.listCountries = data.data;
        // console.log(data.data);
        // console.log(this.listCountries);
        toast.success('get all country success')
      })
      .catch(error => {
        console.error(error);
        toast.error("Get data fail");
      })
  }
  
  deleteAllCountry = async () => {
    return await deleteAllCountry()
    .then(() => {
      toast.success("Delete all country successfully!");
    })
    .catch(error => {
      console.log(error);
      toast.error("Delete all country fail")
    })
  }

  deleteCountry = async countryId => {
    return await deleteCountry(countryId)
      .then(() => {
        toast.success("Delete country successfully!");
      })
      .catch(error => {
        console.error(error);
        toast.error("Delete country fail");
      });
  }

  // pagingCountry = async 
};