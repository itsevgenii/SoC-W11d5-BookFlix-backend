import pkg from 'pg';
const { Pool } = pkg;

const BOOKSDB = process.env.POSTGRES_CONNECTION_URL;

const pool = new Pool({
connectionString: BOOKSDB,
});





export default  {
  query: function (text, params) {
    return pool.query(text, params);
  },
};





// const { Pool } = require("pg");
