import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { Country } from 'src/models/country';
import { observer } from 'mobx-react';

import { useStore } from 'src/Store';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

interface Values {
    code: string;
    name: string;
    description: string;
}

type CountryPopupProps = {
    openPopup: boolean,
    handleClosePopup: any
}

function CountryPopup({ openPopup, handleClosePopup }: CountryPopupProps) {
    const countryStore = useStore().countryStore;
    const { createCountry } = countryStore;

    function handleFormSubmit(values: Country, others: any) {
        createCountry(values)
            .then(() => {
                others.setSubmitting(false);
            })
    }

    return (
        <Formik
            initialValues={{
                code: '',
                name: '',
                description: '',
            }}
            onSubmit={handleFormSubmit}
        >
            {({ handleSubmit, isSubmitting }) => (
                <Form autoComplete='off'>
                    <BootstrapDialog
                        // onClose={handleClosePopup}
                        aria-labelledby="customized-dialog-title"
                        open={openPopup}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClosePopup}>
                            Country
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <label htmlFor="code">Code</label>
                                    <Field
                                        name="code"
                                        id="code"
                                        focused='true'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        name="name"
                                        id="name"
                                        focused='true'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <label htmlFor="description">Description</label>
                                    <Field
                                        name="description"
                                        id="description"
                                        focused='true'
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Form onSubmit={handleSubmit}>
                                <Button type="submit" disabled={isSubmitting}>
                                    Save changes
                                </Button>
                            </Form>
                        </DialogActions>
                    </BootstrapDialog>
                </Form>
            )}
        </Formik>
    );
}

export default React.memo(observer(CountryPopup));

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
