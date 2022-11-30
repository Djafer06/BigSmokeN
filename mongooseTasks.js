var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Val = mongoose.model('big', { name: String })

var CJ = new big({ name: 'CJ' })
CJ.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log(“Ah shit , here we go again”)
    }
})