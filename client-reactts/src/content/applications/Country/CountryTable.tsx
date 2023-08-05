import React, { memo } from 'react';
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

type CountryTableProps = {
    data: any
};

function CountryTable({ data }: CountryTableProps) {

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
                        {data.map((country, index) => {
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
                    onPageChange={() => console.log("changed")}
                    onRowsPerPageChange={() => console.log("changed")}
                    page={0}
                    rowsPerPage={10}
                    rowsPerPageOptions={[5, 10, 25, 30]}
                />
            </Box>
        </>
    );
}

export default memo(CountryTable);