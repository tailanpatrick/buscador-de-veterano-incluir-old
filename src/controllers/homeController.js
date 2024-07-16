exports.paginaInicial = (req, res, next) => {
    const auth = false;

    res.render('index', {
        titulo: 'Este será o título da página',
        auth: auth
    });

}

exports.trataPost = (req, res, next) => {
    const { enrollment } = req.body;
    console.log(enrollment);
    res.send(enrollment)
}