const Student = require('../models/student')

exports.buscar = async (req, res) => {
    const { cpf } = req.query;

    try {

        const student = await Student.findByCpf(cpf);

        if (!student) {
            return res.render('index', {
                cpf: '',
                name: '',
                resultado: !!student
            }); 
          
        }

        return res.render('index', {
            cpf: student.cpf,
            name: student.name,
            resultado: !!student
        }); 

    } catch (err) {
        console.log(err);
        res.status(500).send('Server error')
    }

}