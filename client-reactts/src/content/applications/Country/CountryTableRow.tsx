import React, { memo } from 'react';
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

type CountryTableRowProps = {
    country: Country
}

function CountryTableRow({ country }: CountryTableRowProps) {
    const theme = useTheme();
    const { id, code, name, description } = country;

    return (
        <TableRow
            hover
            selected={false}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    checked={false}
                    onChange={() => console.log("changed")}
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
                    >
                        <EditTwoToneIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete country" arrow>
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
    );
}

export default memo(CountryTableRow);