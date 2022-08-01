// Imports
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./App.css"
// ...

const GOODS = [
  {
    title: 'Explorer Hasbulla',
    description: 'Dagestanec1',
    price: '500',
    img: 'https://lh3.googleusercontent.com/8DqRvH2AZ8p0hn9bnUliblooEosbDhDXGP5Tc4VkWzZhthn13fio5yQZtGTmSMw5VyWa-EBIsuCB012U8mEf-iPZzCploqd2jMelMQ=w600'
  },
  {
    title: 'Leonardo Hasbulla',
    description: 'Dagestanec2',
    price: '200',
    img: '/images/dchasbulla.jpg'
  },
  {
    title: 'Hustler Hasbulla',
    description: 'Dagestanec3',
    price: '900',
    img: '/images/hustlerhasbulla.jpg'
  },
  {
    title: 'Magical Hasbulla',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/X4BxvbGA4QlJqrSDORt_HHHh2DqwSJCEasGDjInN6yYXHhkn96bKEIyOP8NYTRKO2FLaCt7vz9GZCG5vH9siO1jUXYHKLgdsJsZG=w600'
  },
  {
    title: 'Smart Hasbulla',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/KXH8Nz-SakD3GLxCzOnEF1Z4xEkuVvLvW9DoAIp0_WgSeDrrvEFlLqc7W19Q0aTSyN7OYujWr-wT6b_b-Di50HSH2Yd341DZWCb0=w600'
  },
  {
    title: 'Director Hasbulla',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/PWxmI9AhnFWCeNp3en-gcwXzEDz1GXAMOUJF3lAFNifSEZ4ATBs7y7ijhXWe0uoTbFrbbYr-t7xl6udhxZK3ja-v9d67bdbKeOOx9Bs=w600'
  },
  {
    title: 'Guitarre Hasbulla',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/B7Gj0TYR1RaWB1DX80J1UBrjdPlrVKaqQ0OY75i2m7hYRcTYjJ_chb1wcP9RKJ4pksccllb6CTeHy9lGHgzVOPwwWaQzxIc0Qxj8lg=w600'
  },
  {
    title: 'Pilot Hasbulla',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/zOVJZw-Yi66Ut2itCM6gywwSl_2RF7j9NFm3pS3H7QnxTfPgRnqGgmYfucUBt9PI391OeqcoecwlYnqKUt1l3uNki-am4oqdEIk_b6I=w600'
  },
  {
    title: 'Booking Hasbulla',
    description: 'Dagestanec3',
    price: '900',
    img: 'https://lh3.googleusercontent.com/NFeFYG9ypYPdeMwtgUPUhG5NX6KOm95PXMTZg2M1Y2A6i-iMk6q60S1Uvth9chgTlqkkUtufWY0c3WJKpLeXUITiXhofK3nBlCfEUA=w600'
  }
]

const App = () => {
  return (
    <div className='main'>
      <div className="title-div">
        <h1 className="title container">Hasbula Market</h1>
      </div>
      <div className="container">
        {GOODS.map(function (good) {
          return (
            <Card sx={{ maxWidth: 325 }} className='card'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={good.img}
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {good.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Crypto Hasbulla is a collection of 10,000 unique hand-drawn NFTs available on the Ethereum blockchain.
                    One Crypto Hasbulla token is your ticket to future drops, events, and much much more.
                    Join the community today at www.Cryptohasbullanft.com
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })}
      </div>
    </div>
  );
}

export default App;