var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('todoList',['todoList']);
var bodyParser = require('body-parser');
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.get('/todoList', function(req,res){
    console.log("I recieved a GET request")
    db.todoList.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});
app.post('/todoList',function(req, res){
    console.log(req.body);
    db.todoList.insert(req.body,function (err, doc) {
        res.json(doc);
    });
});

app.delete('/todoList/:id',function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.todoList.remove({_id: mongojs.ObjectId(id)},function(err, doc){
        res.json(doc);
    })
});
app.listen(3030);
console.log("server running on port 3030");