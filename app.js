const config = require('./config.json');
const api = require('binance');
const TelegramBot = require('node-telegram-bot-api');
const binance = new api.BinanceRest(config.binance);
const socket = new api.BinanceWS(true);
const bot = new TelegramBot(config.telegram.token, { polling: false });

// Socket listens for new Binance activity and sends alerts for new buy orders via Telegram
socket.onUserData(binance, (res) => {
  if (res.eventType == 'executionReport' && res.side == 'BUY' && res.orderStatus == 'NEW') {
    var cost = parseFloat(res.price) * parseFloat(res.quantity);
    var resp  = "BINANCE%0A";
    resp     += "Just bought: " + res.symbol + "%0A";
    resp     += "Rate: " + res.price + "%0A";
    resp     += "Amount: " + res.quantity + "%0A";
    resp     += "Cost: " + cost.toFixed(8);
    bot.sendMessage(config.telegram.chatId, resp);
  }
});
