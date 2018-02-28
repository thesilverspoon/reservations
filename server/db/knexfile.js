require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    },
    searchPath: ['public'],
    migrations: {
      directory: './server/db/migrations/',
    },
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
    },
    searchPath: ['public'],
    migrations: {
      directory: './server/db/migrations/',
    },
  },
};
