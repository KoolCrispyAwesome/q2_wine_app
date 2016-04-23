const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const flash = require('connect-flash');
const cookieSession = require('cookie-session');
const routes = require('./routes');

app.set('view engine', 'jade');
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({

}));
app.use(passport.initialize());
app.use(flash());

app.get('*', (req, res) => res.render('404'));

app.listen(3000, () => console.log('Server listening on port 3000'));

module.exports = {
  app
};