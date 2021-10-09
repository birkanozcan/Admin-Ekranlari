import { Button, createStyles, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core'
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

function RolesEditPage() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('USD');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    }
    return (
        <div className='form-firms'>
        <form className={classes.root} noValidate autoComplete="off">

        <div className='email'>
                <label>Rol Adı</label>
                <TextField
                    id="standard-read-only-input"
                    label=""
                    defaultValue="Süper Admin"
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </div>

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

        </form>

        <div className='user-button'>
        <Link to="/roles"><Button variant="contained">Vazgeç</Button></Link>
            <Button variant="contained" color="primary">
                Kaydet
            </Button>
        </div>

    </div>
    )
}

export default RolesEditPage
