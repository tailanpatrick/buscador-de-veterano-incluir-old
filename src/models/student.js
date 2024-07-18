const pool = require('../../db');

class Student {
    static async findByCpf(cpf) {
        const result = await pool.query('SELECT name, cpf FROM student WHERE cpf = $1', [cpf]);

        return result.rows[0];
    }
}

module.exports = Student