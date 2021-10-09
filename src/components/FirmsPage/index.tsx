import React from 'react'
import { Button, createStyles, Grid, InputBase, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from '@material-ui/core'
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

function dataRole(image: string, rank: string, firm: string) {
    return {image, rank, firm};
  }
  
  const rowsRole = [
    dataRole('https://media-exp1.licdn.com/dms/image/C4D0BAQEnn8TVr5yybA/company-logo_200_200/0/1579107917872?e=2159024400&v=beta&t=pGJ6lD8OTUXw-4beFke6xBiKv6VqqcHPA5T5rVxP04Q', '1', 'Doğuş Teknoloji'),
    dataRole('https://media-exp1.licdn.com/dms/image/C4D0BAQEnn8TVr5yybA/company-logo_200_200/0/1579107917872?e=2159024400&v=beta&t=pGJ6lD8OTUXw-4beFke6xBiKv6VqqcHPA5T5rVxP04Q', '2', 'Doğuş Holding'),
    dataRole('https://media-exp1.licdn.com/dms/image/C4D0BAQEnn8TVr5yybA/company-logo_200_200/0/1579107917872?e=2159024400&v=beta&t=pGJ6lD8OTUXw-4beFke6xBiKv6VqqcHPA5T5rVxP04Q', '3', 'Dream'),
    dataRole('https://media-exp1.licdn.com/dms/image/C4D0BAQEnn8TVr5yybA/company-logo_200_200/0/1579107917872?e=2159024400&v=beta&t=pGJ6lD8OTUXw-4beFke6xBiKv6VqqcHPA5T5rVxP04Q', '4', 'VDF'),
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

function FirmsPage() {
    const classes = useStyles();
    return (
    <>
    <Grid className='home-table-container' container>
    <Grid item xs={1}>
  <div className={classes.addRole}>
      <Add/>
      <span>Firma Ekle</span>
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
                    <StyledTableCell align="center">FOTOĞRAF</StyledTableCell>
                    <StyledTableCell align="center">ŞİRKET ADI</StyledTableCell>
                    <StyledTableCell align="center">YETKİLER</StyledTableCell>
                    <StyledTableCell align="center">İŞLEMLER</StyledTableCell>
                    <StyledTableCell align="center">DİĞER</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsRole.map((row) => (
                    <StyledTableRow key={row.rank}>
                      <StyledTableCell align="center" component="th" scope="row">
                        {row.rank}
                      </StyledTableCell>
                      <StyledTableCell align="center"><img src={row.image} alt=""/></StyledTableCell>
                      <StyledTableCell align="center">{row.firm}</StyledTableCell>
                      <StyledTableCell align="center"><Button variant="contained">Düzenle</Button></StyledTableCell>
                      <StyledTableCell align="center"><Link to="/FirmsEdit"><Button variant="contained">Düzenle</Button></Link></StyledTableCell>
                      <StyledTableCell align="center"><Link to={`/firms-add/${row.rank}`}><BorderColor/></Link><Delete/></StyledTableCell>
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

export default FirmsPage
