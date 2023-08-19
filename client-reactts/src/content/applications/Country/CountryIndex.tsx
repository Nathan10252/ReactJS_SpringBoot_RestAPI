import React, { memo, useState } from 'react';
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
import CountryTable from './CountryTable';

import { Typography, Button } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { toast } from 'react-toastify';
import CountryPopup from './CountryPopup';
import { useStore } from 'src/Store';

function CountryIndex() {
    const data: Country[] = [
        {
            id: '1',
            code: 'VN1',
            name: 'Viet Nam1',
            description: 'Demo1'
        },
        {
            id: '2',
            code: 'VN2',
            name: 'Viet Nam2',
            description: 'Demo2'
        },
        {
            id: '3',
            code: 'VN3',
            name: 'Viet Nam3',
            description: 'Demo3'
        },
        {
            id: '4',
            code: 'VN4',
            name: 'Viet Nam4',
            description: 'Demo4'
        },
        {
            id: '5',
            code: 'VN5',
            name: 'Viet Nam5',
            description: 'Demo5'
        }
    ];

    const user = {
        name: 'Catherine Pike',
        avatar: '/static/images/avatars/1.jpg'
    };


    const [openPopup, setOpenPoup] = useState(false);
    function handleOnClickCreateCountry() {
        console.log('clicked')
        setOpenPoup(true)
        // toast.success("Install react toastify success");
    }
    const countryStore = useStore().countryStore;
    const { createCountry, getAllCountry } = countryStore;
    function handleFormSubmit(values: Country, others: any) {
        createCountry(values)
            .then(() => {
                others.setSubmitting(false);
                getAllCountry();
            })
    }

    return (
        <>
            <Helmet>
                <title>Country management</title>
            </Helmet>
            <PageTitleWrapper>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" component="h3" gutterBottom>
                            Countries
                        </Typography>
                        <Typography variant="subtitle2">
                            {user.name}, these are your recent country
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            sx={{ mt: { xs: 2, md: 0 } }}
                            variant="contained"
                            onClick={handleOnClickCreateCountry}
                            startIcon={<AddTwoToneIcon fontSize="small" />}
                        >
                            Create country
                        </Button>
                    </Grid>
                </Grid>
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <CountryTable />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
            <CountryPopup
                openPopup={openPopup}
                handleClosePopup={() => {
                    setOpenPoup(false);
                }}
                // handleFormSubmit={() => handleFormSubmit}
            />
        </>
    );
}

export default memo(CountryIndex);