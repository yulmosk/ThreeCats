// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/test')

// var Cat = mongoose.model('Cat', { name: String })

// var kitty = new Cat({ name: 'Пушок' })
// kitty.save(function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Мяу')
//     }
// })


// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/test');

// var schema = mongoose.Schema({ name: String })
// var Cat = mongoose.model('Cat', schema);

// var kitty = new Cat({ name: 'Пушок' });
// kitty.save(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Мяу');
//     }
// });


// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/test')

// var schema = mongoose.Schema({ name: String })

// schema.methods.meow = function(){
//     console.log(this.get("name") + " сказал мяу")
// }

// var Cat = mongoose.model('Cat', schema)

// var kitty = new Cat({ name: 'Пушок' })
// kitty.save(function (err) {
//     kitty.meow()
// })


var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test1')
var Cat = require("./models/cat").Cat

var cat = new Cat({
    title: "Пятачок",
    nick: "pig"
})

console.log(cat)
cat.save(function(){
    console.log(arguments)
})