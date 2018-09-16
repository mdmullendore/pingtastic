'use strict';

let express = require('express');
let http = require('http');
let config = require('./config/config');
let app = express();

const url = config.siteUrl;
const botUrl = config.botUrl;
const interval = 5 * 60 * 1000;
const BotInterval = 20 * 60 * 1000;

function pingBot () {
  http.get(botUrl);
  console.log('Bots never sleep ... ... ... ');
}

function pingUrl () {
  http.get(url);
  console.log('ping ' + url + ' at ' + new Date() + ' ... ... ... ');
}

setInterval(function () {
  pingBot();
}, BotInterval);

setInterval(function () {
  pingUrl();
}, interval);

pingBot();
pingUrl();

module.exports = app;
