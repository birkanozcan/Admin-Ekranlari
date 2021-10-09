import { Button, createStyles, Grid, InputBase, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from '@material-ui/core'
import { Add, BorderColor, Delete, Search } from '@material-ui/icons';
import './index.scss'

import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      border: "1px solid #acacac",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "transparent",
      '&:hover': {
        backgroundColor:"transparent",
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
overflow:'hidden',
    },

  }));

function dataRole(rank: string, username: string, role: string, firm: string) {
    return { rank, username, role, firm};
  }
  
  const rowsRole = [
    dataRole('1', 'Birkan Özcan', 'Süper Admin', 'Doğuş Holding'),
    dataRole('2', 'Birkan Özcan', 'Admin', 'Doğuş Teknoloji'),
    dataRole('3', 'Birkan Özcan', 'Yönetici', 'Doğuş Holding'),
    dataRole('4', 'Birkan Özcan', 'Editör', 'VDF'),
    dataRole('5', 'Birkan Özcan', 'Destek', 'B&B'),

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

function UserListForm() {
    const classes = useStyles();
    return (
        <>
        <Grid className='home-table-container' container>
        <Grid item xs={1}>
      <div className={classes.addRole}>
          <Add/>
          <span>Kullanıcı Ekle</span>
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
                        <StyledTableCell align="center">Kullanıcı</StyledTableCell>
                        <StyledTableCell align="center">Rolü</StyledTableCell>
                        <StyledTableCell align="center">Firma</StyledTableCell>
                        <StyledTableCell align="center">Yetki Ekle</StyledTableCell>
                        <StyledTableCell align="center">İşlem</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rowsRole.map((row) => (
                        <StyledTableRow key={row.rank}>
                          <StyledTableCell align="center" component="th" scope="row">
                            {row.rank}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.username}</StyledTableCell>
                          <StyledTableCell align="center">{row.role}</StyledTableCell>
                          <StyledTableCell align="center">{row.firm}</StyledTableCell>
                          <StyledTableCell align="center"><Button variant="contained">Ekle</Button></StyledTableCell>
                          <StyledTableCell align="center"><Link to={`/users-edit/${row.rank}`}><BorderColor/></Link><Delete/></StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
        </>
    )
}

export default UserListForm
