var router = require("express").Router();
var crypot = require("crypto");
// var body = require("body-parser");
// var ul = body.urlencoded({ extended: false });
var users = require("../db/index");
// router.post("/logup", ul, (req, res) => {
//     var name = req.body.uname;
//     var pass = req.body.upass;
//     // users.find().then((ok) => {
//     //     console.log(ok);
//     //     res.send("查询成功");
//     // }).catch((err) => {
//     //     console.log(err);
//     // })
//     var usercol = new users({
//         name: name,
//         pass: pass,
//     })
//     // 8开始插入
//     usercol.save().then((ok) => {
//         console.log(ok)
//         res.send("数据插入成功")
//     })
// })
router.get("/logup", (req, res) => {
    
    var name=req.query.uname;
    var password=req.query.upass;
    var pass = crypot.createHash("md5").update(password).digest("hex");
    users.find({name:name,pass:pass}).then((ok) => {
        console.log(ok[0].name,ok[0].pass);
        res.send({success:1})
    }).catch((err) => {
        console.log(err);
        res.send({success:0})
    })
    // var usercol = new users({
    //     name: name,
    //     pass: pass,
    // })
    // // 8开始插入
    // usercol.save().then((ok) => {
    //     console.log(ok)
    //     res.send("数据插入成功")
    // })
})
module.exports = router;