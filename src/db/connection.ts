const environment = process.env.NODE_ENV || 'development';

import  client from 'knex';
import {ConnectionConfig }from 'knex';

const config:ConnectionConfig= require('../../knexfile.js')[environment];

export = client(config);
