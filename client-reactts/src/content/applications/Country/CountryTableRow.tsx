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
import countryStore from './CountryStore'
import { useStore } from 'src/Store';
import CountryPopup from './CountryPopup';
import { Key } from '@mui/icons-material';

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
    const { deleteCountry, deleteAllCountry, updateCountry, getAllCountry } = countryStore;

    function handleDeleteCountry() {
        deleteCountry(id)
        .then(() => {
            getAllCountry();
        })
        console.log(id);

    }

    const [openPopup, setOpenPoup] = useState(false);
    function handleOnClickEditCountry() {
        // console.log('clicked')
        setOpenPoup(true)
        // toast.success("Install react toastify success");
    }


    return (
        <>
            <TableRow
                hover
                selected={false}
            >
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        checked={false}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            handleSelectOneCountry(event, country.id)
                            // console.log("changed")
                        }
                        value={false}
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
                            onClick={handleOnClickEditCountry}
                        >
                            <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete country" arrow onClick={handleDeleteCountry}>
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
        </>
    );
}

export default memo(CountryTableRow);