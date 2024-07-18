exports.middlewareGlobal  = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
}

exports.csrfMidddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}


exports.check404 = (req, res, next) => {
    res.status(404).render('error', {
        errorMessage: 'A página solicitada não existe',
        errorCode: 404
    });
    next();
}