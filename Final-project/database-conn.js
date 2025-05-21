const pg = require('pg');
const Client = pg.Client;


// Set up your database connection info
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'root',
  database: 'db'
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS Employee (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL
);
`;

const insertQuery = `
  INSERT INTO Employee (name, salary)
  VALUES
  ('John Doe', 50000),
  ('Jane Smith', 55000),
  ('James Brown', 60000);
`;


// Connect to PostgreSQL
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL!');

    // Example query
    return client.query('select * from Employee');
  })
  .then(res => {
    console.log('Query Results:', res.rows);
  })
  .catch(err => console.error('Connection error', err.stack))
  .finally(() => client.end());
