import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
    Grid,
    Container,
    TablePagination,
    TableContainer,
    Table,
    TableHead,
    Box,
    TableRow,
    TableCell,
    Checkbox,
    TableBody
} from '@mui/material';
import Footer from 'src/components/Footer';
import CountryTableRow from './CountryTableRow';
import { Country } from 'src/models/country';
import { useStore } from 'src/Store';
import { toast } from 'react-toastify';
import { observer } from 'mobx-react';

// const ROOTPATH = 'http://localhost:8000';

// const COUNTRY_API_PATH = "/api/country";

// const config = {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     }
//   };
// type CountryTableProps = {
//     data: any
// };{ data }: CountryTableProps

function CountryTable() {
    const countryStore = useStore().countryStore;
    const { getAllCountry, listCountries } = countryStore;
    const [datas, setData] = useState([]);
    useEffect(() => {
        getAllCountry();
    }, [])


    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    checked={false}
                                    indeterminate={true}
                                    onChange={() => console.log("changed")}
                                />
                            </TableCell>
                            <TableCell>Code</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listCountries.map((country: Country, index: any) => {
                            return (
                                <CountryTableRow key={index} country={country} />
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box p={2}>
                <TablePagination
                    component="div"
                    count={10}
                    onPageChange={() => {

                        console.log("changed")
                    }}
                    onRowsPerPageChange={() => console.log("changed")}
                    page={0}
                    rowsPerPage={10}
                    rowsPerPageOptions={[5, 10, 25, 30]}
                />
            </Box>
        </>
    );
}

export default memo(observer(CountryTable));