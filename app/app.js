#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../bin/server');
var debug = require('debug')('iss:server');

/**
 * Create HTTP server.
 */
// Start The HTTP Server
app.listen('3000', 'localhost', function() {
  console.log('Servidor OK');
});
