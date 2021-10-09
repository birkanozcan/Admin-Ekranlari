import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Assignment, DateRange, Description, Info, PhotoLibrary, Redo, Settings } from '@material-ui/icons'
import "./index.scss";

function FirmsEditPage() {
    return (
        <>
            <Grid container className='firms-wrapper'>
                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Hakkında</h2>
                        <div className="firms-wrapper-detail">
                            <Info />
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Kısayollar</h2>
                        <div className="firms-wrapper-detail">
                            <Redo/>
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Banner</h2>
                        <div className="firms-wrapper-detail">
                            <PhotoLibrary/>
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Etkinlik</h2>
                        <div className="firms-wrapper-detail">
                            <DateRange/>
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Anket</h2>
                        <div className="firms-wrapper-detail">
                        <Assignment/>
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Küçük Banner</h2>
                        <div className="firms-wrapper-detail">
                        <PhotoLibrary/>
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Dökümanlar</h2>
                        <div className="firms-wrapper-detail">
                            <Description/>
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            <Button variant="contained">Ekle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3}>
                    <div className='firms-wrapper-info'>
                        <h2>Ayarlar</h2>
                        <div className="firms-wrapper-detail">
                            <Settings/>
                            <div className="firms-wrapper-buttons">
                            <Button variant="contained">Düzenle</Button>
                            </div>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </>
    )
}

export default FirmsEditPage
