'use strict';

let express = require('express');
let http = require('http');
let config = require('./config/config');
let app = express();

const urls = config.urls;
const botUrl = config.botUrl;
const interval = 5 * 60 * 1000;
const BotInterval = 20 * 60 * 1000;

function pingBot() {
  http.get(botUrl);
  console.log('Bots never sleep ... ... ... ');
}

function pingUrls() {
  urls.forEach(function(url) {
    http.get(url);
    console.log(`ping ${url} at ${new Date()} ... ... ... `);
  });
}

setInterval(function() {
  pingBot();
}, BotInterval);

setInterval(function() {
  pingUrls();
}, interval);

pingBot();
pingUrls();

module.exports = app;
