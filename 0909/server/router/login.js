var router = require("express").Router();
var crypot = require("crypto");
var body = require("body-parser");
var urlparse = body.urlencoded({ extended: false })
var users = require("../db/index");
router.post("/login", urlparse, (req, res) => {
    var pass = crypot.createHash("md5").update(req.body.pass).digest("hex");
    var usercol = new users({
        name: req.body.uname,
        pass: pass,
    })
    // 8开始插入
    usercol.save().then((ok) => {
        console.log(ok)
        res.send({id:1,succ:"数据插入成功"})
    }).catch((err)=>{
        console.log(err);
        res.send({id:0,err})
    })
})
module.exports = router;