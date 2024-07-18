exports.buscar = (req, res) => {
    const { cpf } = req.query;
    console.log(cpf)


    res.render('index', {
        cpf: cpf,
        nome: '', 
        resultado: false,
    });
}