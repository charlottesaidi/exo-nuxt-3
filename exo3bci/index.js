const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');

const articleRoute = require('./routes/article');
const commentRoute = require('./routes/comment');
const authRoute = require('./routes/auth');
const adminRoute = require('./routes/admin');

app.use(cors());

app.use(BodyParser.json({limit: '50mb'}))
app.use(BodyParser.urlencoded({extended: true}))

app.use('/articles', articleRoute)
app.use('/articles', commentRoute)
app.use('/auth', authRoute)
app.use('/admin', adminRoute)

app.listen(4000, () => {
    console.log('Serveur à l\'écoute');
})
