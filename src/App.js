import React from 'react'
import {Typography, AppBar, Card, CardActions,CardContent, CardMedia, Button, CssBaseline, Grid, Toolbar,Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
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
            <div className={classes.buttons}>
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
            </div>
          </Container>
        </div>
        <Container maxWidth="md" className={classes.cardGrid}>
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}> 
                <CardMedia 
                  image="https://source.unsplash.com/random"
                  title="image title"
                  className={classes.cardMedia}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography >
                    this is cardMedia you can use for describing the content of your card...
                  </Typography>
                </CardContent>
              </Card>
              </Grid>
          </Grid>
        </Container>
        </main>
    
    </>
  )
}

export default App
