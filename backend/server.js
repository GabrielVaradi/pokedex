const express = require('express');
// const SocketServer = require('ws').Server;
// const axios = require('axios')
// const fetch = require('node-fetch');
const path = require("path")
// require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

const server = app.use(express.static('../client/public')).listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

app.get('*', (req, res) => {
  res.sendFile(path.join('../client/public'));
});

// const wss = new SocketServer({
//     server
// }); 
  
// wss.on('connection', (ws) => {
//     console.log('Client connected');
//     ws.on('close', () => console.log('Client disconnected'));
// });
  


fetchData = async () => {
    // if (!getToken) {
    //     getToken = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_TWITCH_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_TWITCH_API_CLIENT_SECRET}&grant_type=client_credentials&scope=analytics:read:games`)
    //     .then(response => response)
    //     .catch(e => console.log(e))
    // } else {
    //     setInterval(async () => {
    //         getToken = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_TWITCH_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_TWITCH_API_CLIENT_SECRET}&grant_type=client_credentials&scope=analytics:read:games`)
    //         .then(response => response)
    //         .catch(e => console.log(e))
    //     },  12600000);
    // }

    // const data = await Promise.all(series.map(serie => {
    //     return fetch(serie.url, {
    //         "headers": {
    //                 "Client-ID": process.env.REACT_APP_TWITCH_API_CLIENT_ID,
    //                 "Authorization": "Bearer " + getToken.data.access_token
    //         }
    //     }).then(resp => resp.json())}
    //     )).catch(e => console.log(e))
}
