import React, { ChangeEvent, memo, useState } from 'react';
import { Country } from 'src/models/country';
import {
    Typography,
    useTheme,
    IconButton,
    TableRow,
    TableCell,
    Tooltip,
    Checkbox,
} from '@mui/material';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { useStore } from 'src/Store';
import CountryPopup from './CountryPopup';
import { observer } from 'mobx-react';
import AlertDialog from 'src/components/Dialog/alertDialog';

// import { useConfirm } from "";


type CountryTableRowProps = {
    country: Country
}

function CountryTableRow({ country }: CountryTableRowProps) {
    const theme = useTheme();
    const { id, code, name, description } = country;

    const [selectedCountry, setSelectedCountry] = useState<string[]>(
        []
    );

    const handleSelectOneCountry = (
        event: ChangeEvent<HTMLInputElement>,
        CountryId: string
    ): void => {
        if (!selectedCountry.includes(CountryId)) {
            setSelectedCountry((prevSelected) => [
                ...prevSelected,
                CountryId
            ]);
        } else {
            setSelectedCountry((prevSelected) =>
                prevSelected.filter((id) => id !== CountryId)
            );
        }
    };

    const countryStore = useStore().countryStore;
    const { deleteCountry, updateCountry, getAllCountry } = countryStore;

    function handleDeleteCountry() {
        deleteCountry(id)
            .then(() => {
                setOpenAlertDialog(false);
                getAllCountry();
            })
    }

    const [openPopup, setOpenPoup] = useState(false);
    function handleOpenPopup() {
        setOpenPoup(true)
    }
    const isCountrySelected = selectedCountry.includes(id);

    const [openAlertDialog, setOpenAlertDialog] = useState(false);
    function handleOpenAlertDialog() {
        setOpenAlertDialog(true)
    }

    return (
        <>
            <TableRow
                hover
                key={id}
                selected={isCountrySelected}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        checked={isCountrySelected}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            handleSelectOneCountry(event, id)
                            // console.log(id);
                        }}
                        value={isCountrySelected}
                    />
                </TableCell>

                <TableCell>
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                    >
                        {code}
                    </Typography>
                </TableCell>

                <TableCell>
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                    >
                        {name}
                    </Typography>
                </TableCell>

                <TableCell>
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                    >
                        {description}
                    </Typography>
                </TableCell>

                <TableCell align="right">
                    <Tooltip title="Edit country" arrow>
                        <IconButton
                            sx={{
                                '&:hover': {
                                    background: theme.colors.primary.lighter
                                },
                                color: theme.palette.primary.main
                            }}
                            color="inherit"
                            size="small"
                            onClick={handleOpenPopup}
                        >
                            <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete country" arrow onClick={handleOpenAlertDialog}>
                        <IconButton

                            sx={{
                                '&:hover': { background: theme.colors.error.lighter },
                                color: theme.palette.error.main
                            }}
                            color="inherit"
                            size="small"

                        >
                            <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
            <CountryPopup
                header='Edit Country'
                initialValue={{
                    code: code,
                    name: name,
                    description: description,
                }}
                openPopup={openPopup}
                handleClosePopup={() => {
                    setOpenPoup(false);
                }}
                handleFormSubmit={(values: Country, others: any) => {
                    const c = { id, ...values }
                    updateCountry(c)
                        .then(() => {
                            others.setSubmitting(false);
                            getAllCountry();
                            setOpenPoup(false);
                        })
                    console.log(id);
                }}
            />
            <AlertDialog
                header='Delete Country'
                body='Bạn chắc chắn muốn xóa?'
                openAlertDialog = {openAlertDialog}
                handleClose={() => {
                    setOpenAlertDialog(false);
                }}
                handleClickAgree={handleDeleteCountry}
            />
        </>
    );
}

export default memo(observer(CountryTableRow));