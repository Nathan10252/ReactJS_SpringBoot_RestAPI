import axios from 'axios';

const ROOTPATH = 'http://localhost:8000';

const COUNTRY_API_PATH = "/api/country";

export function getCountryById(countryId) {
    return axios.get(ROOTPATH + COUNTRY_API_PATH + '/' + countryId);
}

export function pagingCountry(searchObj) {
    return axios.post(ROOTPATH + COUNTRY_API_PATH + '/paging-country', searchObj);
}

export function getAllCountry() {
    return axios.get(ROOTPATH + COUNTRY_API_PATH + '/get-all-country');
}

export function createCountry(country) {
    return axios.post(ROOTPATH + COUNTRY_API_PATH + '/create-country', country);
}

export function updateCountry(country) {
    return axios.put(ROOTPATH + COUNTRY_API_PATH + '/update-country', country);
}

export function deleteCountry(countryId) {
    return axios.delete(ROOTPATH + COUNTRY_API_PATH + '/delete-country/' + countryId);
}

export function delteAllCountry() {
    return axios.delete(ROOTPATH + COUNTRY_API_PATH + '/delete-all-country');
}

export function delteListCountry(countryIds) {
    return axios.delete(ROOTPATH + COUNTRY_API_PATH + '/delete-list-country', countryIds);
}