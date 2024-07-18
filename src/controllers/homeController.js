exports.paginaInicial = (req, res, next) => {
    const auth = false;

    res.render('index', {
        titulo: 'Buscador de Veterano Incluir',
        auth: auth
    });

}
