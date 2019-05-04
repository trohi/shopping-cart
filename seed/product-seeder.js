var Product = require('../bin/models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser:true});

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
        title: 'Ghotic Video Game',
        description: 'Awsome Game!!',
        price: 25
    }),
    new Product({
        imagePath: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg',
        title: 'Harry Potter Video Game',
        description: 'Magic all around !!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.instant-gaming.com/images/products/1419/271x377/1419.jpg',
        title: 'Call Of Duty Video Game',
        description: 'Warfare !!',
        price: 20
    }),

    new Product({
        imagePath: 'https://static-ie.gamestop.ie/images/products/263589/3max.jpg',
        title: 'Fifa 2019',
        description: 'Awsome Sport Game!!',
        price: 12
    }),

    new Product({
        imagePath: 'https://images.g2a.com/newlayout/323x433/1x1x0/387a113709aa/59e5efeb5bafe304c4426c47',
        title: 'GTA V Video Game',
        description: 'One of the top 10 games nowdays!!',
        price: 15
    }),

    new Product({
        imagePath: 'https://www.dvdsreleasedates.com/posters/800/F/Free-Fire-2017-movie-poster.jpg',
        title: 'Free Fire Video Game',
        description: 'One of the best free mobile games!!',
        price: 11
    })
]; 
 

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
