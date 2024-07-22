const Student = require('../models/student')
const { maskCpf } = require('../helpers/format');

exports.buscar = async (req, res) => {
    const { cpf } = req.query

    const numCPF = cpf.replace(/\D/g, '');

    try {

        const student = await Student.findByCpf(numCPF);
        
        if (!student) {
            return res.render('index', {
                cpf: maskCpf(cpf),
                name: '',
                resultado: !!student
            }); 
          
        }

        return res.render('index', {
            cpf: maskCpf(student.cpf),
            name: student.nome,
            resultado: !!student
        }); 

    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }

}