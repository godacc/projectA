var mongodb=require("mongoose");

mongodb.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser: true,useUnifiedTopology: true});
var db = mongodb.connection;

db.on('error', console.error.bind(console, '数据库连接错误'));
db.on('open', function() {
    console.log("数据库连接成功")
});


var userSchema =new mongodb.Schema({
    name: String,
    pass:String,
  },
    {versionKey: false},
  );
var users = mongodb.model('users', userSchema);
// model中的第一个参数是表名,第二个参数 是上面的schema

module.exports=users;
