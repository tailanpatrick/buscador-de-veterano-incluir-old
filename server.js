const express = require('express');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, csrfMidddleware, check404 } = require('./src/middlewares/middleware');
const routes = require('./routes');

const app = express();
const PORT = 3333;

// Middleware para parsing do corpo da requisição
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Usar Helmet para segurança
app.use(helmet());

// Usar sessões e flash messages
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));
app.use(flash());

// Configurar view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views'));

// Usar rotas do arquivo routes
app.use(routes);

// Middleware global
app.use(middlewareGlobal);

app.use(check404);

// Adicionar middleware de CSRF
app.use(csrf());
app.use(csrfMidddleware);


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor subiu na porta ${PORT}`);
});
