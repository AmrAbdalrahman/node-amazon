const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');


const app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/shop',{ useNewUrlParser: true }).then((db)=>{
    console.log('MONGO connectes');

}).catch(error=> console.log(error));

app.set('view engine', 'ejs');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findById('5c61cbe49fc6621490eb78b6')
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);




const port = process.env.PORT || 3000;

app.listen(port,()=>{
    User.findOne().then(user => {
        if (!user) {
            const user = new User({
                name: 'Max',
                email: 'max@test.com',
                cart: {
                    items: []
                }
            });
            user.save();
        }

    });
    console.log(`listening on port ${port}`);
});

