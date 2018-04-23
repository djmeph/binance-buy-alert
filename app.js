const config = require('./config.json');
const api = require('binance');
const binance = new api.BinanceRest(config.binance);
const socket = new api.BinanceWS(true);

// First Commit: Monitor user data for result formatting
socket.onUserData(binance, (res) => {
  console.log(res);
});
