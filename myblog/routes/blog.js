
var moment = require('moment');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {

    res.render('blog',{
        title:'BLOG TEMPLATE TEST'
    });
});

router.get('/add', function(req, res) {

    var now = new Date();
    var today = moment(now).format('YYYY-MM-DD');

    res.render('blog-add',{
        title:'BLOG TEMPLATE TEST',
        today : today
    });
});

router.get('/view', function(req, res) {

    var content = '在一般程式語言中，Method (或 Function)是否有回傳值都稱作Method，但PL/SQL中根據是否有回傳值將Method分為兩種，Procedure與Function；Procedure為沒回傳值的Method，Function為有回傳值的Method。\n' +
        '\n' +
        '\n' +
        '\n' +
        'ProcedureProcedure就是PL/SQL中的Method，Procedure將的一連串的操作行為包裝，提高重複使用性。\n' +
        '\n' +
        ' Procedure程式語法架構：\n' +
        '\n' +
        ' CREATE OR REPLACE PROCEDURE procedure_name\n' +
        '(       --參數宣告區\n' +
        '        parameter1 MODE DATATYPE [DEFAULT expression],\n' +
        '        parameter2 MODE DATATYPE [DEFAULT expression],\n' +
        '        ...\n' +
        ')\n' +
        'IS\n' +
        '[       --local變數宣告區\n' +
        '        variable1 DATATYPE;\n' +
        '        variable2 DATATYPE;\n' +
        ']\n' +
        'BEGIN\n' +
        '        statements\n' +
        'END;\n' +
        '\n' +
        '在上面語法架構中有幾點需要注意：';

    res.render('blog-view',{
        title:'BLOG TEMPLATE TEST',
        post_title : '关于sqlserver展bom阶的问题' ,
        post_description : '关于sqlserver展bom阶的问题' ,
        post_meta : 'Andrew 於 2017-09-22 發表此文章' ,
        post_content : content
    });
});


module.exports = router ;