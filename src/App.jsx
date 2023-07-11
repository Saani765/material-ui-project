import React from "react";
import { Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { makeStyles } from '@mui/core/styles';

const useStyles=makeStyles((theme)=>({
    container:{
        backgroundColor : theme.pallete.background.paper,
        padding : theme.spacing(8,0,6)
    }
}));


const App=()=>
{   const classes=useStyles();
    return (
        <>
          <CssBaseline/>
          <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon/>
                    <Typography variant="h6"> 
                       Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
          <main>
            <div className={classes.container}>
                <Container maxWidth="sm" >
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello everyone this is a photo album and I am enjoying making this project website for my learning process
                    </Typography>
                    <div>
                        <Grid container spacing={3} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos

                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Know more about them

                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            
          </main>
        
        
        </>
    );
}

export default App;