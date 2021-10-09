import { Button, createStyles, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

const users = [
    {
        value: 'USD',
        label: 'Birkan Özcan',
    },
    {
        value: 'EUR',
        label: 'Birkan Özcan',
    },
    {
        value: 'BTC',
        label: 'Birkan Özcan',
    },
    {
        value: 'JPY',
        label: 'Birkan Özcan',
    },
];

const role = [
    {
        value: 'USD',
        label: 'Sistem Admin',
    },
    {
        value: 'EUR',
        label: 'Süper Admin',
    },
    {
        value: 'BTC',
        label: 'Admin',
    },
    {
        value: 'JPY',
        label: 'Admin',
    },
];

const read = [
    {
        value: 'USD',
        label: 'Birkan Özcan',
    },
    {
        value: 'EUR',
        label: 'Birkan Özcan',
    },
    {
        value: 'BTC',
        label: 'Birkan Özcan',
    },
    {
        value: 'JPY',
        label: 'Birkan Özcan',
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        fileUp: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },

    }),
);

function UserListEdit() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('USD');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    }
    return (
        <div className='form-firms'>
        <form className={classes.root} noValidate autoComplete="off">

            <div className='user'>
                <label>Kullanıcı</label>

                <TextField
                    id="standard-select-currency"
                    select
                    label=""
                    value={currency}
                    onChange={handleChange}
                    helperText=""
                >
                    {users.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>

            <div className='email'>
                <label>E-Posta</label>
                <TextField
                    id="standard-read-only-input"
                    label=""
                    defaultValue="orhun.susan@d-teknoloji.com.tr"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>

            <div className='user'>
                <label>Rolü</label>

                <TextField
                    id="standard-select-currency"
                    select
                    label=""
                    value={currency}
                    onChange={handleChange}
                    helperText=""
                >
                    {role.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

            </div>

            <div className='email'>
                <label>Firma</label>
                <TextField
                    id="standard-read-only-input"
                    label=""
                    defaultValue="Doğuş Teknoloji"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>

        </form>

        <div className='user-button'>
        <Link to="/user-list"><Button variant="contained">Vazgeç</Button></Link>
            <Button variant="contained" color="primary">
                Kaydet
            </Button>
        </div>

    </div>
    )
}

export default UserListEdit
