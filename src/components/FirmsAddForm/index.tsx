import { Button, createStyles, IconButton, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

const managers = [
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

const participation = [
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

function FirmsAddForm() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    }
    return (
        <div className='form-firms'>
            <form className={classes.root} noValidate autoComplete="off">
                <div className='firms-detail'>
                    <label>Firma</label>
                    <TextField id="outlined-basic" label="Doğuş Teknoloji" variant="outlined" />
                </div>

                <div className='firms-detail-photo'>
                    <label>Fotoğraf</label>
                    <TextField
                        id="standard-read-only-input"
                        label=""
                        defaultValue="Doğuş Teknoloji"
                        InputProps={{
                            readOnly: true,
                        }}
                    />

                    <div className={classes.root}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Dosya Seç
                            </Button>
                        </label>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>
                </div>

                <div className='firms-manager'>
                    <label>Yönetici</label>

                    <TextField
                        id="standard-select-currency"
                        select
                        label=""
                        value={currency}
                        onChange={handleChange}
                        helperText=""
                    >
                        {managers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </div>

                <div className='firms-manager'>
                    <label>Katılım</label>

                    <TextField
                        id="standard-select-currency"
                        select
                        label=""
                        value={currency}
                        onChange={handleChange}
                        helperText=""
                    >
                        {participation.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </div>

                <div className='firms-manager'>
                    <label>Okuma</label>

                    <TextField
                        id="standard-select-currency"
                        select
                        label=""
                        value={currency}
                        onChange={handleChange}
                        helperText=""
                    >
                        {read.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </div>
            </form>

            <div className='firms-button'>
            <Link to="/firms"><Button variant="contained">Vazgeç</Button></Link>
                <Button variant="contained" color="primary">
                    Kaydet
                </Button>
            </div>

        </div>
    )
}

export default FirmsAddForm
