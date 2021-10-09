import { Button, createStyles, Grid, IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from '@material-ui/core'
import { Mail, MoreHoriz, Person, Sms, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './index.scss'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  HorizontalBarSeries,
  RadialChart
} from 'react-vis';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';

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

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function dataMostVisited(rank: string, name: string, visitNumber: number, visitTime: string, bounceRate: string) {
  return { rank, name, visitNumber, visitTime, bounceRate };
}

const rowsMostVisited = [
  dataMostVisited('1', 'Sürdürülebilirlik', 1432, '7 DK 3 SN', '%35'),
  dataMostVisited('2', 'Covid 19', 1310, '6 DK 12 SN', '%48'),
  dataMostVisited('3', 'Port-AI', 1105, '9 DK 33 SN', '%21'),
  dataMostVisited('4', 'Bizden Bize', 603, '2 DK 10 SN', '%57'),
  dataMostVisited('5', 'Doğuştan Haberler', 417, '4 DK 23 SN', '%83'),
];

function dataEngageUsers(rank: string, groupPage: string, firm: string) {
  return { rank, groupPage, firm };
}

const rowsEngageUsers = [
  dataEngageUsers('1', 'Birkan Özcan', 'Doğuş Holding'),
  dataEngageUsers('2', 'Birkan Özcan', 'Doğuş Holding'),
  dataEngageUsers('3', 'Birkan Özcan', 'Doğuş Holding'),
  dataEngageUsers('4', 'Birkan Özcan', 'Doğuş Holding'),
  dataEngageUsers('5', 'Birkan Özcan', 'Doğuş Holding'),
];

function dataMostVisitedFirms(rank: string, firm: string, domain: string, desktop: number, ios: number, android: number) {
  return { rank, firm, domain, desktop, ios, android };
}

const rowsMostVisitedFirms = [
  dataMostVisitedFirms('1', 'Doğuş Teknoloji', 'DTEKNOLOJİ', 456, 789, 458),
  dataMostVisitedFirms('1', 'Doğuş Teknoloji', 'DTEKNOLOJİ', 456, 789, 458),
  dataMostVisitedFirms('1', 'Doğuş Teknoloji', 'DTEKNOLOJİ', 456, 789, 458),
  dataMostVisitedFirms('1', 'Doğuş Teknoloji', 'DTEKNOLOJİ', 456, 789, 458),
  dataMostVisitedFirms('1', 'Doğuş Teknoloji', 'DTEKNOLOJİ', 456, 789, 458),
];

function dataSurvey(rank: string, surveyName: string, participant: number) {
  return { rank, surveyName, participant };
}

const rowsEvents = [
  dataEvents('1', 'Data Talks Panel', 784),
  dataEvents('1', 'Covid 19', 784),
  dataEvents('1', 'Atıksız Ev', 784),
  dataEvents('1', 'Ofis Egzersizleri', 784),
  dataEvents('1', 'Değer Sohbetleri', 784),

];

function dataEvents(rank: string, groupPage: string, participant: number) {
  return { rank, groupPage, participant };
}


const rowsSurvey = [
  dataSurvey('1', 'Motivasyon', 456),
  dataSurvey('2', 'Do Gönüllüleri', 456),
  dataSurvey('3', 'Blog Anketi', 456),
  dataSurvey('4', 'Kapak Toplama', 456),
  dataSurvey('5', 'Doğuş Grubu Gençeri', 456),
];

function Item(props: any) {

  return (
    <Grid style={{ padding: 12 }} container spacing={2}>
      <Grid item xs={5}>
        <img className='home-carousel-img' src={props.item.img} alt="" />
      </Grid>

      <Grid className='home-carousel-text' item xs={7}>
        <p>
          {
            props.item.description
          }
        </p>

        <div className='home-carousel-engagement'>
          {props.item.likeCount} Beğeni <ThumbUp />  {props.item.commentCount} Yorum <Sms />
        </div>
      </Grid>
    </Grid>
  )
}


function HomeAnalytics() {

  const items = [
    {
      img: "https://picsum.photos/id/237/200/300",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      likeCount: '454',
      commentCount: '666',
    },

    {
      img: "https://picsum.photos/200/300",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      likeCount: '454',
      commentCount: '666',
    }
  ]

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleVisitedOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleVisitedClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Grid container spacing={2} justify='space-around' className='home-analytics-wrapper'>
        <Grid item xs={3}>
          <Grid className='home-analytics-item' container>
            <Grid item xs={7}>
            <p>Anlık ziyaretçi</p>
              <p>789</p>
            </Grid>
            <Grid item xs={4}>
              <Person />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid className='home-analytics-item' container>
            <Grid item xs={7}>
              <p>Paylaşım</p>
              <p>789</p>
            </Grid>
            <Grid item xs={4}>
              <Mail />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid className='home-analytics-item' container>
            <Grid item xs={7}>
              <p>Yorum</p>
              <p>789</p>
            </Grid>
            <Grid item xs={4}>
              <Sms />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid className='home-analytics-item' container>
            <Grid item xs={7}>
              <p>Beğeni</p>
              <p>789</p>
            </Grid>
            <Grid item xs={4}>
              <ThumbUp />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid spacing={2} className='home-charts-wrapper' container>
        <Grid item xs={4}>
          <div className='home-charts-item'>
            <p className='home-charts-title'>34. Hafta Login</p>
            <XYPlot margin={{ bottom: 70 }} xType="ordinal" width={300} height={300}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis tickLabelAngle={-45} />
              <YAxis />
              <VerticalBarSeries

                barWidth={0.3}
                data={[
                  { x: 'Pazartesi', y: 10, fill: 10, stroke: 10 },
                  { x: 'Salı', y: 5, fill: 5, stroke: 5 },
                  { x: 'Çarşamba', y: 15, fill: 15, stroke: 15 },
                  { x: 'Perşembe', y: 9, fill: 9, stroke: 9 },
                  { x: 'Cuma', y: 7, fill: 7, stroke: 7 },
                  { x: 'Cumartesi', y: 12, fill: 12, stroke: 12 },
                  { x: 'Pazar', y: 5, fill: 5, stroke: 5 }
                ]}
              />

            </XYPlot>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='home-charts-item'>
            <p className='home-charts-title'>34. Hafta Login</p>
            <XYPlot margin={{ bottom: 70 }} yType="ordinal" width={300} height={300}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis />
              <YAxis tickLabelAngle={-45} />
              <HorizontalBarSeries
                barWidth={0.3}
                data={[
                  { y: 'Apples', x: 10 },
                  { y: 'Bananas', x: 5 },
                  { y: 'Cranberries', x: 15 }
                ]}
              />
            </XYPlot>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className='home-charts-item'>
            <p className='home-charts-title'>34. Hafta Login</p>
            <RadialChart labelsAboveChildren={true} showLabels={true}
              data={[{ angle: 1, label: "IOS" }, { angle: 5, label: "Android" }, { angle: 2, label: "Desktop" }]}
              width={300}
              height={300} />
          </div>
        </Grid>

      </Grid>
      <Grid spacing={2} className='home-table-container' container>
        <Grid item xs={7}>

          <TableContainer component={Paper}>
            <div className='home-table-title'>
              <p>Sık Ziyaret Edilen Sayfalar</p>
              <IconButton
              className='home-dropdown-wrapper'
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleVisitedOpen}
              >
                <MoreHoriz />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleVisitedClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Sıra</StyledTableCell>
                  <StyledTableCell align="center">Grup Sayfası</StyledTableCell>
                  <StyledTableCell align="center">Ziyaret Sayısı</StyledTableCell>
                  <StyledTableCell align="center">Oturum Süresi</StyledTableCell>
                  <StyledTableCell align="center">Hemen Çıkma Oranı</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsMostVisited.map((row) => (
                  <StyledTableRow key={row.rank}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.rank}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.name}</StyledTableCell>
                    <StyledTableCell align="center">{row.visitNumber}</StyledTableCell>
                    <StyledTableCell align="center">{row.visitTime}</StyledTableCell>
                    <StyledTableCell align="center">{row.bounceRate}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>

        <Grid item xs={5}>
          <TableContainer component={Paper}>
            <div className='home-table-title'>
              <p>Etkileşimi Yüksek Kullanıcılar</p>
              <MoreHoriz />
            </div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Sıra</StyledTableCell>
                  <StyledTableCell align="center">Grup Sayfası</StyledTableCell>
                  <StyledTableCell align="center">Ziyaret Sayısı</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsEngageUsers.map((row) => (
                  <StyledTableRow key={row.rank}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.rank}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.groupPage}</StyledTableCell>
                    <StyledTableCell align="center">{row.firm}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Grid spacing={2} className='home-table-container' container>
        <Grid item xs={7}>
          <div className='home-sliders'>
        <div className='home-table-title'>
              <p>Etkileşimi Yüksek Postlar</p>
              <MoreHoriz />
            </div>
          <Carousel
            className='home-carousel-wrapper'>
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
          </div>
        </Grid>

        <Grid item xs={5}>
          <TableContainer component={Paper}>
            <div className='home-table-title'>
              <p>Anket</p>
              <MoreHoriz />
            </div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Sıra</StyledTableCell>
                  <StyledTableCell align="center">Anket Adı</StyledTableCell>
                  <StyledTableCell align="center">Katılımcı</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsSurvey.map((row) => (
                  <StyledTableRow key={row.rank}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.rank}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.surveyName}</StyledTableCell>
                    <StyledTableCell align="center">{row.participant}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
      </Grid>

      <Grid spacing={2} className='home-table-container' container>
        <Grid item xs={7}>
        <div className='home-sliders'>
        <div className='home-table-title'>
              <p>Etkileşimi Yüksek Bloglar</p>
              <MoreHoriz />
            </div>
          <Carousel
            className='home-carousel-wrapper'>
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
        </div>
        </Grid>

        <Grid item xs={5}>

          <TableContainer component={Paper}>
            <div className='home-table-title'>
              <p>Anket</p>
              <MoreHoriz />
            </div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Sıra</StyledTableCell>
                  <StyledTableCell align="center">Grup Sayfası</StyledTableCell>
                  <StyledTableCell align="center">Katılımcı</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsEvents.map((row) => (
                  <StyledTableRow key={row.rank}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.rank}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.groupPage}</StyledTableCell>
                    <StyledTableCell align="center">{row.participant}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Grid>
      </Grid>




      <Grid className='home-table-container' container>

        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <div className='home-table-title'>
              <p>Sık Ziyaret Edilen Sayfalar</p>
              <MoreHoriz />
            </div>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Sıra</StyledTableCell>
                  <StyledTableCell align="center">Şirket</StyledTableCell>
                  <StyledTableCell align="center">Domain</StyledTableCell>
                  <StyledTableCell align="center">Desktop</StyledTableCell>
                  <StyledTableCell align="center">IOS</StyledTableCell>
                  <StyledTableCell align="center">Android</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsMostVisitedFirms.map((row) => (
                  <StyledTableRow key={row.rank}>
                    <StyledTableCell align="center" component="th" scope="row">
                      {row.rank}
                    </StyledTableCell>
                    <StyledTableCell align="center">{row.firm}</StyledTableCell>
                    <StyledTableCell align="center">{row.domain}</StyledTableCell>
                    <StyledTableCell align="center">{row.desktop}</StyledTableCell>
                    <StyledTableCell align="center">{row.ios}</StyledTableCell>
                    <StyledTableCell align="center">{row.android}</StyledTableCell>
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

export default HomeAnalytics
