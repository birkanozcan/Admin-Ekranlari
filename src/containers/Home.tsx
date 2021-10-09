import { createStyles, Theme, FormControl, InputLabel, makeStyles, MenuItem, Select, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import {
  KeyboardDatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import HomeAnalytics from '../components/HomeAnalytics'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: '100%',
    },
  }),
);

const Home = () => {

  //Hooks begin
  const classes = useStyles();

  const [selectedFirm, setSelectedFirm] = useState(null)
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)


  //Functions begin
  const handleFirmChange = (e: any) => {
    setSelectedFirm(e.target.value)
  }

  const handleStartDateChange = (date: any) => {
    setSelectedStartDate(date)
  }
  const handleEndDateChange = (date: any) => {
    setSelectedEndDate(date)
  }


  return (
    <div>
      <Grid container justify='space-between' spacing={2}>
        <Grid item xs={6}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Şirket</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectedFirm}
              onChange={(e) => handleFirmChange(e)}
              label="Şirket"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Birkan ile Bilal</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid className='home-picker-wrapper' item xs={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              id="date-picker-inline"
              label="Başlangıç tarihi"
              value={selectedStartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Grid className='home-picker-wrapper' item xs={3}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              id="date-picker-inline"
              label="Bitiş tarihi"
              value={selectedEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Grid>
      <HomeAnalytics />
    </div>
  )
}

export default Home
