var Article = require('../models/article') ;

var article =   {
    title : '這是第1篇文章' ,
    meta : 'Andrew POST at 2017/09/13' ,
    description : '測試文章' ,
    content : '顯示第1篇文章的內容'
};

var articleDAO = new Article();

articleDAO.get(article.title,article.meta,function (err,r) {
    if (err){
        console.error(err);
    }
    console.log('查詢的回傳資料',r);
});

articleDAO.getByID('59b89cf7aed0752bc0f688bc',function (err,r) {
    if (err){
        console.error(err);
    }
    console.log('查詢 BY ID 的回傳資料',r);
});

articleDAO.save(article,function (err,r) {
    if (err){
        console.error(err);
        return ;
    }
    console.log('儲存的回傳資料',r);
});

articleDAO.update(article,function (err,r) {
    article.title = '修改成其他的文章標題';
    if (err){
        console.error(err);
    }
    console.log('更新的回傳資料',r);
});
/*
articleDAO.delete(article.title,article.meta,function (err,r) {
    if (err){
        console.error(err);
    }
    console.log('刪除的回傳資料',r);
});
*/