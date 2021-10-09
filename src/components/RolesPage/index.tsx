import React from 'react'
import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, Grid, InputBase, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, Typography, withStyles } from '@material-ui/core'
import { Add, BorderColor, Delete, Search } from '@material-ui/icons';
import './index.scss'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    border: "1px solid #acacac",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "transparent",
    '&:hover': {
      backgroundColor: "transparent",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  addRole: {
    border: "1px solid #acacac",
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    justifyContent: 'center',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },

  rolesTable: {
    overflow: 'hidden',
  },

}));

function dataRole(rank: string, rolename: string) {
  return { rank, rolename };
}

const rowsRole = [
  dataRole('1', 'Süper Admin'),
  dataRole('2', 'Admin'),
  dataRole('3', 'Yönetici'),
  dataRole('4', 'Editör'),
  dataRole('5', 'Destek'),
];

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: '#acacac',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      border: `1px solid ${theme.palette.divider}`,
    },
  }),
)(TableCell);

function RolesPage() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <>
      <Grid className='home-table-container' container>
        <Grid item xs={1}>
          <div className={classes.addRole}>
            <Add />
            <span>Rol Ekle</span>
          </div>
        </Grid>

        <Grid item xs={11}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid className='home-table-container' container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.rolesTable} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">ID</StyledTableCell>
                  <StyledTableCell align="center">ROL ADI</StyledTableCell>
                  <StyledTableCell align="center">YETKİ EKLE</StyledTableCell>
                  <StyledTableCell align="center">İŞLEM</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsRole.map((row) => (
                  <StyledTableRow key={row.rank}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.rank}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.rolename}</StyledTableCell>
                    <StyledTableCell align="center"><Link to={`/roles-edit/${row.rank}`}><Button variant="contained">Düzenle</Button></Link></StyledTableCell>
                    <StyledTableCell className="RolesIcon" align="center"><BorderColor />

                      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                        <Delete />
                      </Button>

                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title">
          Mesaj
          <Button variant="outlined" color="primary" onClick={handleClose}>
            x
        </Button>

        </DialogTitle>
        <DialogContent dividers>
          <Typography className="role-wrapper" align="center" gutterBottom>
            <span>Süper Admin rolü silinsin mi?</span>
            <div className="role-wrapper-buttons">
              <Button variant="contained">Evet</Button>
              <Button variant="contained">hayır</Button>
            </div>
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default RolesPage
