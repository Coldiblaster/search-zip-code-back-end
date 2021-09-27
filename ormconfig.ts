const defaultFolder =
  process.env.NODE_ENV === 'production' ? './dist' : './src';

module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    entities: [`${defaultFolder}/modules/**/infra/typeorm/entities/*.{js,ts}`],
    migrations: [`${defaultFolder}/shared/infra/typeorm/migrations/*.{js,ts}`],
    cli: {
      migrationsDir: `${defaultFolder}/shared/infra/typeorm/migrations/`,
    },
  },
];
