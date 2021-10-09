import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Assignment, Create, DateRange, Description, Info, PhotoLibrary, Settings } from '@material-ui/icons'
import "./index.scss";

function GroupsEditPage() {
    return (
        <>
            <Grid container className='groups-wrapper'>
                <Grid item xs={3}>
                    <div className='groups-wrapper-info'>
                        <h2>Hakkında</h2>
                        <div className="groups-wrapper-detail">
                            <Info />
                            <div className="groups-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='groups-wrapper-info'>
                        <h2>Menü</h2>
                        <div className="groups-wrapper-detail">
                        <Assignment/>
                            <div className="groups-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='groups-wrapper-info'>
                        <h2>Etkinlik</h2>
                        <div className="groups-wrapper-detail">
                            <DateRange/>
                            <div className="groups-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='groups-wrapper-info'>
                        <h2>Banner</h2>
                        <div className="groups-wrapper-detail">
                            <PhotoLibrary/>
                            <div className="groups-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>


                <Grid item xs={3}>
                    <div className='groups-wrapper-info'>
                        <h2>Anket</h2>
                        <div className="groups-wrapper-detail">
                        <Create/>
                            <div className="groups-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='groups-wrapper-info'>
                        <h2>Dökümanlar</h2>
                        <div className="groups-wrapper-detail">
                            <Description/>
                            <div className="groups-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='groups-wrapper-info'>
                        <h2>Ayarlar</h2>
                        <div className="groups-wrapper-detail">
                            <Settings/>
                            <div className="groups-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Düzenle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </>
    )
}

export default GroupsEditPage
