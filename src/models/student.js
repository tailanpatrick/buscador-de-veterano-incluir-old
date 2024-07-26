const pool = require('../../db');

class Student {
    static async findByCpf(cpf) {
        try {
            const result = await pool.query(`SELECT "nomeCompleto", "cpf" FROM ${process.env.DB_TABLE} WHERE cpf = $1`, [cpf]);
            return result.rows[0];
        } catch (error) {
            console.error('Error executing query', error);
            throw error;
        }
    }
}

module.exports = Student;
