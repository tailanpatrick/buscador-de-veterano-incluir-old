const pool = require('../../db');

class Student {
    static async findByCpf(cpf) {
        const result = await pool.query('SELECT nome, cpf FROM public."Alunos_Veteranos_2023" WHERE cpf = $1', [cpf]);
        
        return result.rows[0];
    }
}

module.exports = Student