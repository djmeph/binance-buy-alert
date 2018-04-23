# Binance Buy Alerts for Telegram

This is a simple script that looks for buy orders on Binance and sends an alert via Telegram.

Create a configuration file in the root folder called `config.json` using the following format:

```
{
  "binance": {
    "key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  },
  "telegram": {
    "token": "000000000:XXXXXXXX-XXXXXXXXXXXXXXXXXXXXXXXXXX",
    "chatId": "00000000"
  }
}
```

When creating an API key for this on Binance, it is highly recommended to set it to read-only and restrict it to the public IP address of the server it's running on.
