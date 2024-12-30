require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    timezone: '+07:00'
  },
  test: {
    username: process.env.DB_TEST_USERNAME || 'root',
    password: process.env.DB_TEST_PASSWORD || null,
    database: process.env.DB_TEST_NAME || 'database_test',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_PROD_USERNAME || 'root',
    password: process.env.DB_PROD_PASSWORD || null,
    database: process.env.DB_PROD_NAME || 'database_production',
    host: process.env.DB_PROD_HOST || '127.0.0.1',
    dialect: 'mysql'
  }
};