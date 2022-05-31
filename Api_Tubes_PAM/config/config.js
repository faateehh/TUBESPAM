module.exports = {
  "development": {
    "username": "postgres",
    "password": "whatyourhopes123",
    "database": "databasePAM_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "whatyourhopes123",
    "database": "databasePAM_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DATABASE_HOST,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require":true,
        "rejectUnauthorized":false
      }
    }
  }
}
