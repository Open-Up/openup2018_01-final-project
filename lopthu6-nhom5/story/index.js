var express = require('express');
var story = require('./api/story');
var user = require('./api/user');
var storydetail = require('./api/storydetail');
var http = require('http');
const bodyParser = require('body-parser');
const session = require('express-session');
const Passport = require('passport');
const LocalStrategy = require('passport-local');
var app = express();
app.listen(5000);

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: "myscret",
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));
app.use(Passport.initialize());
app.use(Passport.session());

app.route('/')
.get((req,res)=>{
  if(!req.isAuthenticated()){
    console.log(req.isAuthenticated());
    res.render('login');
  }else {
    res.redirect('http://localhost/story2/views/index.html#/')
  }
});

app.route('/login')
    .get((req, res) => res.render('login'))
    .post(Passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/loginOK'
    }));

app.get('/loginOK', (req, res) => res.redirect('http://localhost/story2/views/index.html#/'));

Passport.use(new LocalStrategy(
    (username, password, done) => {
        http.get('http://localhost:5000/api/user', (res) => {
            res.on('data', (d) => {
                const db = JSON.parse(d);
                const userRecord = db.find(user => user.username == username);
                if (userRecord && userRecord.password == password) {
                    return done(null, userRecord);
                } else {
                    return done(null, false);
                }
            });
        }).on('error', (e) => {
            console.error(e);
        });
    }
));

Passport.serializeUser((user, done) => {
    done(null, user.username)
});

Passport.deserializeUser((username, done) => {
    http.get('http://localhost:5000/api/user', (res) => {
        res.on('data', (d) => {
            const db = JSON.parse(d);
            console.log(db)
            const userRecord = db.find(user => user.username == username);
            if (userRecord) {
                return done(null, userRecord);
            } else {
                return done(null, false);
            }
        });
    }).on('error', (e) => {
        console.error(e);
    });
})

app.get("/api/story/:id", function (req, res) {
    storydetail.storydetail(req,res);
});

app.route('/api/user').get(function (req, res) {
    user.user(req, res);
    // var a = user;
    // console.log('abc',user);

});

app.route('/api/story').get(function (req, res) {
    story.story(req, res);

});

