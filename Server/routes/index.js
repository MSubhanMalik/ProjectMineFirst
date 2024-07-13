var express = require('express');
const router = require('./auth-router')
const app = express()

app.use('/api/auth', router)


module.exports = app;

