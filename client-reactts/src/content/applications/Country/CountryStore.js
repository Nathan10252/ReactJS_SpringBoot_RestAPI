import { makeObservable, makeAutoObservable } from 'mobx';
import { toast } from 'react-toastify';

import {
  getCountryById,
  createCountry,
  delteAllCountry,
  deleteCountry,
  getAllCountry,
  pagingCountry,
  updateCountry,
}
  from './CountryService';

export default class CountryStore {
  selectedCountry = null;
  listCountries = null;

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
        this.listCountries = data;
      })
      .catch(error => {
        console.error(error);
        toast.error("Get data fail");
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
};