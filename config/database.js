module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cd8ktopa6gds9o64vd8g-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'trazos'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'V9wt3Qta6vmLIqId6MHJZhbFxwxwLwCw'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
