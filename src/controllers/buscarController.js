const Student = require('../models/student')
const { maskCpf } = require('../helpers/format');

exports.buscar = async (req, res) => {
    const { cpf } = req.query


    try {

        const student = await Student.findByCpf(cpf);
        
        if (!student) {
            return res.render('index', {
                cpf: cpf,
                name: '',
                resultado: !!student
            }); 
          
        }

        return res.render('index', {
            cpf: student.cpf,
            name: student.nomeCompleto,
            resultado: !!student
        }); 

    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }

}