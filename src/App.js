import React from 'react'
import {Typography, AppBar, Card, CardActions, CardMedia, Button, CssBaseline, Grid, Toolbar,Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
    
      <main className={classes.container}>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hi Everyone here is photo album that i am creating so this text is just testing long paragraph so as always keep practicing.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my Photos
                </Button>
                </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary option
                </Button>
                </Grid>
            </Grid>
          </Container>
        </div>
        </main>
    
    </>
  )
}

export default App
