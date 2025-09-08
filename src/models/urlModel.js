import pool from "../config/db.js";

export const createUrl = async (userId, originalUrl, shortCode) => {
  const result = await pool.query(
    `INSERT INTO urls (user_id, original_url, short_code) 
     VALUES ($1, $2, $3) RETURNING *`,
    [userId, originalUrl, shortCode]
  );
  return result.rows[0];
};

export const findUrlByCode = async (code) => {
  const result = await pool.query(
    `SELECT * FROM urls WHERE short_code = $1`,
    [code]
  );
  return result.rows[0];
};
