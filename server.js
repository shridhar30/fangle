const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

const port = process.env.PORT || 5000
app.set('view engine', 'ejs');
app.use(express.static('public'))

mongoose.connect('mongodb+srv://shridhar:shridhar@cluster0.0nkgz.mongodb.net/fangle?retryWrites=true&w=majority');

const moviesSchema = {
    name: String,
    stage1: Array,
    stage2: Array,
}

const Movie = mongoose.model('Movie', moviesSchema);

app.get('/', (req, res) => {
    Movie.find({}, function(err, movies) {
        console.log(err)
        console.log(movies)
        res.render('index', {
            moviesList: movies
        })
    })
})

app.listen(port, function() {
    console.log('server is running');
})