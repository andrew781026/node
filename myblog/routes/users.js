var express = require('express');
var router = express.Router();

// users 已在 app.use 那處理了 , 在這只要計算從那開始的路徑
router.get('/:name',function (req,res) {
    // 無 ejs 時 , 手動控制回傳資料
    // res.send('hello,'+req.param('name'));
    // 有 ejs 時 , 用 render 將資料塞入 ejs 並回傳
    res.render('user',{
        name : req.params.name
    });
});

module.exports = router ;