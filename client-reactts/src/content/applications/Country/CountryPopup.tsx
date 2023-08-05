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
import { Formik, Form, Field } from 'formik';

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

type CountryPopupProps = {
    openPopup: boolean,
    handleClosePopup: any
}

function CountryPopup({ openPopup, handleClosePopup }: CountryPopupProps) {

    return (
        <Formik
            initialValues={null}
            onSubmit={(values: any) => {
                console.log(values);
            }}
        >
            {({ values, setFieldValue }) => (
                <Form autoComplete='off'>
                    <BootstrapDialog
                        onClose={() => { }}
                        aria-labelledby="customized-dialog-title"
                        open={openPopup}
                    >
                        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClosePopup}>
                            Country
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        name="code"
                                        label="Code"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        label="Name"
                                        focused
                                        name="name"
                                        id="name"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Description"
                                        focused
                                        fullWidth
                                        name="description"
                                        id="description"
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" onClick={() => console.log(values)}>
                                Save changes
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </Form>
            )}
        </Formik>
    );
}

export default React.memo(CountryPopup);

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
