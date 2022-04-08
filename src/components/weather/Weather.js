import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Weather() {
    const[weather, setWeather] = useState(undefined);
    useEffect(()=>{
            axios.get("http://localhost:8080/weather?lat=2&lon=2")
            .then(response => {
            console.log(response);
        });
    },[]);
  return (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Todays Forcast
                    </Typography>
                    
                    <Typography variant="h5" component="div">
                        {weather?.main?.temp}
                    </Typography>
                    <Typography variant="body2">
                        Sunrise : { weather?.sys?.sunrise}
                        <br />
                        Sunset : {weather?.sys?.sunset}
                    </Typography>
                </CardContent>
            </React.Fragment>
         </Card>
    </Box>
  );
}